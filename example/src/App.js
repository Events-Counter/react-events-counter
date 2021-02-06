import React from 'react'

import { EventsCounter, IconEmoji } from 'react-events-counter'
import 'react-events-counter/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <section>
        <h1>Events Counter</h1>
        <h3>Props:</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Required</th>
            <th>Default</th>
          </tr>
          <tr>
            <td>asset</td>
            <td>asset identifier</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>event</td>
            <td>asset identifier</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>user</td>
            <td>
              user identifier, in case you want to link the event to a user
            </td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>application</td>
            <td>name of the application</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>text</td>
            <td>text to be shown along side count</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>icon</td>
            <td>icon to be shown along side count</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>order</td>
            <td>order in which to render icon, text and count.
            <br/>type: list of string
            </td>
            <td>no</td>
            <td>['icon', 'text', 'count']</td>
          </tr>
          <tr>
            <td>countOnLoad</td>
            <td>whether to count on load or not i.e. without user interaction
            <br/>useful when counting page-views.
            </td>
            <td>no</td>
            <td>false</td>
          </tr>
          <tr>
            <td>formatCount</td>
            <td>
              format the rendering of the count.
              <br />
              {'Must contain {count}'}
              <br /> type: string
            </td>
            <td>no</td>
            <td>{'{count}'}</td>
          </tr>
          <tr>
            <td>className</td>
            <td>CSS class names</td>
            <td>no</td>
            <td></td>
          </tr>
        </table>
      </section>

      <p>
        {' '}
        Please refer to{' '}
        <a href='https://docs.eventscounter.com/' target='_blank' className=''>
          Events Counter Documentation
        </a>{' '}
        for general concepts.{' '}
      </p>
      <hr />
      <p className=''>
        Disclaimer: `dryRun` is set to 1. So no actual API call is being made on
        this page.
      </p>
      <section>
        <h1>1. Basic Events Counter</h1>
        <pre>
          {`
<EventsCounter
  asset='home-page'
  event='page-views'
  text='Total views:'
  countOnLoad={true}
/>
          `}
        </pre>
        <h3>Result:</h3>
        <div className='result'>
          <EventsCounter
            asset='home-page'
            event='page-views'
            text='Total views:'
            countOnLoad={true}
          />
        </div>
      </section>
      <hr />
      <section>
        <h1>2. With icon</h1>
        <h3>Description:</h3>
        <p>
          Increments on click event only. Click event is attached to the icon
          supplied.
        </p>
        <div id='example'>
          <h3>Example: Basic event counter</h3>
          <pre>
            {`
<EventsCounter
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
            <EventsCounter
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

        <div id='example'>
          <h3>Example 1: Change the render order using the `order` prop</h3>
          <pre>
            {`
<EventsCounter
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
            <EventsCounter
              asset='home-page'
              event='dislikes-page'
              text='NOPE - I disliked it &nbsp;'
              icon={<IconEmoji symbol='👎&nbsp;' label='views' />}
              order={['text', 'icon', 'count']}
            />
          </div>
        </div>

        <div id='example'>
          <h3>Example 2: A bigger emoji icon</h3>
          <pre>
            {`
<EventsCounter
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
            <EventsCounter
              asset='home-page'
              event='resizes-unicorn'
              order={['text', 'count', 'icon']}
              icon={<IconEmoji symbol='🦄' label='views' size={4} />}
            />
          </div>
        </div>

        <div id='example'>
          <h3>Example 3: Control how to render the `count` </h3>
          <pre>
            {`
<EventsCounter
  asset='home-page'
  event='renders-count'
  order={['text', 'count']}
  formatCount='({count})'
  text='Total views: '
/>
            `}
          </pre>

          <h3>Result:</h3>
          <span>Click on the emoji icon</span>
          <div className='result'>
            <EventsCounter
              asset='home-page'
              event='renders-count'
              order={['text', 'count']}
              formatCount='({count})'
              text='Total views: '
            />
          </div>
        </div>

        <div id='example'>
          <h3>Example 4: Pass the CSS </h3>
          <pre>
            {`
<EventsCounter
  className='cosmetics'
  asset='home-page'
  event='customizes-css'
  order={['text', 'count']}
  formatCount='({count})'
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
            <EventsCounter
              className='cosmetics'
              asset='home-page'
              event='customizes-css'
              order={['text', 'count']}
              formatCount='({count})'
              text='Total views: '
            />
          </div>
        </div>
        {/* ends the section */}
      </section>
      <hr />
      <section>
        <p className='footer'>~~ Thats all folks! ~~</p>
        <p className='footer'><a href="https://github.com/raevilman/react-events-counter" target="_blank" class="">GitHub Repo</a></p>
      </section>
    </div>
  )
}

export default App
