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

      <h3>Increments by 2</h3>
      <BasicEventCounter
        assetId='home-page'
        eventId='page-views'
        stepBy={2}
        dryRun={true}
        text=' YES - I liked it &nbsp;' 
        icon={<IconEmoji symbol='👍&nbsp;' label='views' />}
      />
      <br/>
      <h3>Increments by 1</h3>
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        text='meh &nbsp;'
        icon={<IconEmoji symbol='😐&nbsp;' label='views' />}
      />
      <br/>
      <h3>Change the order</h3>
      <code>order=['text', 'icon', 'count']</code>
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        text='NOPE - I disliked it &nbsp;'
        icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
        order={['text','icon','count']}
      />
      <br/>
      <h3>A bigger size for the emoji</h3>
      <BasicEventCounter
        // className='counter'
        assetId='home-page'
        eventId='page-views'
        stepBy={3}
        dryRun={true}
        icon={<IconEmoji symbol='👺' label='views' size={4} />}
      />
    </div>
  )
}

export default App
