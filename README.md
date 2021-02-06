# ✋ 🙅‍♀️ 🚫 THIS LIBRARY REQUIRES AN API KEY 🚫 🙅‍♀️ ✋
### For more info visit: https://www.therdnotes.com/projects/events-counter

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

import { BasicLoadCounter } from 'react-events-counter'
import 'react-events-counter/dist/index.css'

class Example extends Component {
  render() {
    return <BasicLoadCounter 
        assetId='home-page'
        eventId='page-views'
      />
  }
}
```

---

## Environment variables:
```
REACT_APP_EVENTS_COUNTER_API_URL='https://api.eventscounter.com'
REACT_APP_EVENTS_COUNTER_API_KEY=<api-key>
REACT_APP_EVENTS_COUNTER_DRY_RUN=1
```

> Dry run can be set to 0 or 1.  
> You should set it to 1 while developing. This will will avoid real API calls.

## License

MIT © [raevilman](https://github.com/raevilman)
