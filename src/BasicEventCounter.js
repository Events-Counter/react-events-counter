import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getCounts, postCounts } from './WebClient'
import PropTypes from "prop-types";

/*
  This counter does NOT counts when loaded. This suits for like-event
*/
export function BasicEventCounter({
  assetId,
  eventId,
  stepBy = 1,
  className,
  icon = '',
  text = '',
  order = ['icon', 'text', 'count'],
  dryRun = false
}) {
  const [count, setCount] = useState(dryRun ? 162484 : undefined)

  useEffect(() => {
    getCounts(assetId, eventId, setCount, dryRun)
  }, [])

  if (count) {
    return (
      <div
        key={`${assetId}#${eventId}`}
        className={`${styles.emojiContainer} ${className}`}
        onClick={() =>
          postCounts(assetId, eventId, stepBy, count, setCount, dryRun)
        }
      >
        {order.map((item, index) => {
          switch(item) {
            case 'icon': return <div key='icon'>{icon}</div>
            case 'text': return <p key='text'>{text}</p>
            case 'count': return <p key='count'>({count})</p>
          }
        })}
      </div>
    )
  } else {
    return null;
  }
}

BasicEventCounter.propTypes = {
  assetId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
};
