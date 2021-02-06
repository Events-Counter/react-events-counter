import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getCounts, postCounts } from './WebClient'
import PropTypes from 'prop-types';

/*
  This counter counts when loaded. This suits for events like page-views
*/
export function BasicLoadCounter({
  asset,
  event,
  className,
  text = '',
  order = ['text', 'count'],
  formatCount = { template: "{count}", countPlaceholder: "{count}"}
}) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    postCounts(asset, event, count, setCount)
  }, [])

  if (count) {
    return (
      <div
        key={`${asset}#${event}`}
        className={`${styles.counterContainer} ${className}`}
      >
        {order.map((item, index) => {
          switch(item) {
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

BasicLoadCounter.propTypes = {
  asset: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  
};
