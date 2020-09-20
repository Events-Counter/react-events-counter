import React from 'react'

import {
  BasicLoadCounter,
  BasicEventCounter,
  IconEmoji
} from 'react-events-counter'
import 'react-events-counter/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>Basic Load Counter</h1>
      <p>Note: Increments on load. No click event.</p>
      
      <BasicLoadCounter 
        assetId='home-page'
        eventId='page-views'
        dryRun={true}
      />
      <h1>Basic Event Counters</h1>
      <p>Note: Don't increments on load. Click event on icon supplied.</p>

      Increments by 2
      <BasicEventCounter
        className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={2}
        dryRun={true}
        iconCompLeft={<IconEmoji symbol='👍&nbsp;' label='views' />}
      />
      <br/>
      Increments by 1
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        iconCompLeft={<IconEmoji symbol='😐&nbsp;' label='views' />}
      />
      <br/>
      Icon on left side of the counter
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        iconCompLeft={<IconEmoji symbol='👎&nbsp;' label='views' />}
      />
      <br/>
      Icon on right side of the counter
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={5}
        dryRun={true}
        iconCompRight={<IconEmoji symbol='&nbsp;👋' label='views' />}
      />
      <br/>
      A bigger size for the emoji
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={3}
        dryRun={true}
        iconCompLeft={<IconEmoji symbol='👺' label='views' size={4} />}
      />
    </div>
  )
}

export default App
