# ✋ 🙅‍♀️ 🚫 THIS LIBRARY REQUIRES AN API KEY 🚫 🙅‍♀️ ✋
### For more info visit: https://eventscounter.com

### Demo: https://raevilman.github.io/react-events-counter/

### Used by: https://therdnotes.com/


---
# react-events-counter

> react library for events-counter

[![NPM](https://img.shields.io/npm/v/react-events-counter.svg)](https://www.npmjs.com/package/react-events-counter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-events-counter
```

## Usage

```jsx
import React from 'react'

import { EventsCounter } from 'react-events-counter'
import 'react-events-counter/dist/index.css'

class Example extends Component {
  render() {
    return <EventsCounter 
        asset='home-page'
        event='page-views'
      />
  }
}
```

> ℹ For more examples, refer to the demo page mentioned above.

---

## Environment variables:
```
REACT_APP_EVENTS_COUNTER_API_URL='https://api.eventscounter.com'
REACT_APP_EVENTS_COUNTER_API_KEY=<api-key>
REACT_APP_EVENTS_COUNTER_DRY_RUN=1
```

> Dry run can be set to 0 or 1.  
> You should set it to 1 while developing. This will will avoid real API calls.

---

## Props

|Name|Description|Required|Default|
|--- |--- |--- |--- |
|asset|asset identifier|yes||
|event|asset identifier|yes||
|user|user identifier, in case you want to link the event to a user|no||
|application|name of the application|no||
|text|text to be shown along side count|no||
|icon|icon to be shown along side count|no||
|order|order in which to render icon, text and count. type: list of string|no|['icon', 'text', 'count']|
|countOnLoad|whether to count on load or not i.e. without user interaction. useful when counting page-views.|no|false|
|formatCount|format the rendering of the count. Must contain `{count}`|no|{'{count}'}|
|className|CSS class names|no||

---

## License

MIT © [raevilman](https://github.com/raevilman)
