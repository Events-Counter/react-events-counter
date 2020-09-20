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

  return <div className={className}>{count && <div>{count}</div>}</div>
}

BasicLoadCounter.propTypes = {
  assetId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  
};
