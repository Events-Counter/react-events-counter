import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getCounts, postCounts } from './WebClient'
import PropTypes from 'prop-types';

/*
  This counter counts when loaded. This suits for events like page-views
*/
export function BasicLoadCounter({
  assetId,
  eventId,
  stepBy = 1,
  className,
  text = '',
  order = ['text', 'count'],
  formatCount = { template: "{count}", countPlaceholder: "{count}"},
  dryRun = false
}) {
  const [count, setCount] = useState(dryRun ? 162484 : undefined)

  useEffect(() => {
    if(stepBy!=0) {
      postCounts(assetId, eventId, stepBy, count, setCount, dryRun)
    } else {
      getCounts(assetId, eventId, setCount, dryRun)
    }
  }, [])

  if (count) {
    return (
      <div
        key={`${assetId}#${eventId}`}
        className={`${styles.counterContainer} ${className}`}
      >
        {order.map((item, index) => {
          console.log('template '+formatCount.template);
          console.log('placeholder '+formatCount.countPlaceholder);
          console.log(formatCount.template.replace(formatCount.countPlaceholder, count));
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
  assetId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  
};
