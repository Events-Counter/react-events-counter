import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getCounts, postCounts } from './WebClient'
import PropTypes from "prop-types";

/*
  This counter does NOT counts when loaded. This suits for like-event
*/
export function BasicEventCounter({
  asset,
  event,
  className,
  icon = '',
  text = '',
  order = ['icon', 'text', 'count'],
  formatCount = { template: "{count}", countPlaceholder: "{count}"}
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    getCounts(asset, event, setCount)
  }, [])

  if (count) {
    return (
      <div
        key={`${asset}#${event}`}
        className={`${styles.counterContainer} ${className}`}
      >
        {order.map((item, index) => {
          switch(item) {
            case 'icon': return <div onClick={() =>
              postCounts(asset, event, count, setCount)
            } key='icon'>{icon}</div>
            case 'text': return <p key='text'>{text}</p>
            case 'count': return <p key='count'>{formatCount.template.replace(formatCount.countPlaceholder, count)}</p>
          }
        })}
      </div>
    )
  } else {
    return null;
  }
}

BasicEventCounter.propTypes = {
  asset: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};
