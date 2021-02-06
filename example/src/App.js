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
      <p className="">Disclaimer: `dryRun` is On. So no actual API call is being made on this page.</p>
      <section>
        <h1>1. Basic Load Counter</h1>
        <h3>Description:</h3>
        <p>Increments on load. No click event.</p>
        <h3>Example:</h3>
        <pre>
          {`
<BasicLoadCounter
  asset='home-page'
  event='page-views'
  text='Total views:'
/>
          `}
        </pre>
        <h3>Result:</h3>
        <div className='result'>
          <BasicLoadCounter
            asset='home-page'
            event='page-views'
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
        <div id="example">
          <h3>Example: Basic event counter</h3>
          <pre>
            {`
<BasicEventCounter
  asset='home-page'
  event='likes-page'
  text=' YES - I liked it &nbsp;'
  icon={<IconEmoji symbol='👍&nbsp;' label='views' />}
/>          
            `}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              asset='home-page'
              event='likes-page'
              text=' YES - I liked it &nbsp;'
              icon={<IconEmoji symbol='👍&nbsp;' label='views' />}
            />
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h1>3. Play with the props</h1>

        <div id="example">
          <h3>Example 1: Change the render order using the `order` prop</h3>
          <pre>
            {`
<BasicEventCounter
  asset='home-page'
  event='dislikes-page'
  text='NOPE - I disliked it &nbsp;'
  icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
  order={['text', 'icon', 'count']}
/>
            `}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              asset='home-page'
              event='dislikes-page'
              text='NOPE - I disliked it &nbsp;'
              icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
              order={['text', 'icon', 'count']}
            />
          </div>
        </div>

        <div id="example">
          <h3>Example 2: A bigger emoji icon</h3>
          <pre>
            {`
<BasicEventCounter
  asset='home-page'
  event='resizes-unicorn'
  order={['text', 'count', 'icon']}
  icon={<IconEmoji symbol='🦄' label='views' size={4} />}
/>
      `}
          </pre>
          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              asset='home-page'
              event='resizes-unicorn'
              order={['text', 'count', 'icon']}
              icon={<IconEmoji symbol='🦄' label='views' size={4} />}
            />
          </div>
        </div>

        <div id="example">
          <h3>Example 3: Control how to render the `count` </h3>
          <pre>
            {`
<BasicLoadCounter
  asset='home-page'
  event='renders-count'
  order={['text', 'count']}
  formatCount={{
    template: '({count})',
    countPlaceholder: '{count}'
  }}
  text='Total views: '
/>
            `}
          </pre>

          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <BasicEventCounter
              asset='home-page'
              event='renders-count'
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text='Total views: '
            />
          </div>
        </div>

        <div id="example">
          <h3>Example 4: Pass the CSS </h3>
          <pre>
            {`
<BasicLoadCounter
  className='cosmetics'
  asset='home-page'
  event='customizes-css'
  order={['text', 'count']}
  formatCount={{
    template: '({count})',
    countPlaceholder: '{count}'
  }}
  text='Total views: '
/>
            `}
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
            <BasicEventCounter
              className='cosmetics'
              asset='home-page'
              event='customizes-css'
              order={['text', 'count']}
              formatCount={{
                template: '({count})',
                countPlaceholder: '{count}'
              }}
              text='Total views: '
            />
          </div>
        </div>
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
