import React from 'react'

import {
  BasicLoadCounter,
  BasicEventCounter,
  IconEmoji
} from 'react-events-counter'
import 'react-events-counter/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <section>
        <h1>1. Basic Load Counter</h1>
        <h3>Description:</h3>
        <p>Increments on load. No click event.</p>
        <h3>Example:</h3>
        <pre>
          {`<BasicLoadCounter
    assetId='home-page'
    eventId='page-views'
    dryRun={true}
    text='Total views:'
/>`}
        </pre>
        <h3>Result:</h3>
        <div className='result'>
          <BasicLoadCounter
            assetId='home-page'
            eventId='page-views'
            dryRun={true}
            text='Total views:'
          />
        </div>
      </section>
      <hr />
      <section>
        <h1>2. Basic Event Counters</h1>
        <h3>Description:</h3>
        <p>
          Increments on click event only. Click event is attached to the icon
          supplied.
        </p>
        <example>
          <h3>Example: Basic event counter</h3>
          <pre>
            {`<BasicEventCounter
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        text=' YES - I liked it &nbsp;'
        icon={<IconEmoji symbol='👍&nbsp;' label='views' />}
      />`}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={1}
              dryRun={true}
              text=' YES - I liked it &nbsp;'
              icon={<IconEmoji symbol='👍&nbsp;' label='views' />}
            />
          </div>
        </example>
      </section>
      <hr />
      <section>
        <h1>3. Play with the props</h1>
        <example>
          <h3>Example 1: Increments by 2</h3>
          <pre>
            {`<BasicEventCounter
        assetId='home-page'
        eventId='page-views'
        stepBy={2}
        dryRun={true}
        text='meh &nbsp;'
        icon={<IconEmoji symbol='😐&nbsp;' label='views' />}
      />`}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={2}
              dryRun={true}
              text='MEH&nbsp;'
              icon={<IconEmoji symbol='😐&nbsp;' label='views' />}
            />
          </div>
        </example>

        <example>
          <h3>Example 2: Change the render order</h3>
          <pre>
            {`<BasicEventCounter
        assetId='home-page'
        eventId='page-views'
        stepBy={1}
        dryRun={true}
        text='NOPE - I disliked it &nbsp;'
        icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
        order={['text', 'icon', 'count']}
      />`}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={1}
              dryRun={true}
              text='NOPE - I disliked it &nbsp;'
              icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
              order={['text', 'icon', 'count']}
            />
          </div>
        </example>

        <example>
          <h3>Example 3: A bigger emoji icon</h3>
          <pre>
            {`<BasicEventCounter
        assetId='home-page'
        eventId='page-views'
        stepBy={3}
        dryRun={true}
        order={['text', 'count', 'icon', ]}
        icon={<IconEmoji symbol='🦄' label='views' size={4} />}
      />`}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={3}
              dryRun={true}
              order={['text', 'count', 'icon']}
              icon={<IconEmoji symbol='🦄' label='views' size={4} />}
            />
          </div>
        </example>

        <example>
          <h3>Example 4: Control how to render the `count` </h3>
          <pre>
            {`<BasicLoadCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={3}
              dryRun={true}
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text="Total views: "
            />`}
          </pre>

          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicLoadCounter
              assetId='home-page'
              eventId='page-views'
              stepBy={3}
              dryRun={true}
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text='Total views: '
            />
          </div>
        </example>

        <example>
          <h3>Example 5: Pass the CSS </h3>
          <pre>
            {`<BasicLoadCounter
              className='cosmetics'
              assetId='home-page'
              eventId='page-views'
              stepBy={3}
              dryRun={true}
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text="Total views: "
            />`}
          </pre>
          <pre>
            {`.cosmetics {
  color: blueviolet !important;
  text-decoration: underline;
}`}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicLoadCounter
              className='cosmetics'
              assetId='home-page'
              eventId='page-views'
              stepBy={3}
              dryRun={true}
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text='Total views: '
            />
          </div>
        </example>
        {/* ends the section */}
      </section>
      <hr />
      <section>
        <p className='footer'>~~ Thats all folks! ~~</p>
      </section>
    </div>
  )
}

export default App
