const API_URL = process.env.REACT_APP_EVENTS_COUNTER_API_URL
const API_KEY = process.env.REACT_APP_EVENTS_COUNTER_API_KEY
const ENV_DRY_RUN = process.env.REACT_APP_EVENTS_COUNTER_DRY_RUN
if(!API_URL) throw "Environment variable missing: EVENTS_COUNTER_API_URL"
if(!API_KEY) throw "Environment variable missing: EVENTS_COUNTER_API_KEY"
if(!ENV_DRY_RUN) throw "Environment variable missing: EVENTS_COUNTER_DRY_RUN"


const COUNTS_RESOURCE_URL = API_URL + '/counts'
const IS_DRY_RUN = ENV_DRY_RUN == 1
console.log('Dry run: '+IS_DRY_RUN);

async function checkError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return Promise.resolve(response.json())
  } else {
    const responseInJson = await Promise.resolve(response.json())
    return Promise.reject(responseInJson)
  }
}

export function postCounts(asset, event, count, setCount) {
  if (!asset ) {
    console.error('asset is a required property!')
    return 
  }
  if (!event ) {
    console.error('event is a required property!')
    return 
  }
  if (IS_DRY_RUN) {
    console.log('Dry run: postCounts skipped')
    setCount(parseInt(count, 10) + 1)
  } else {
    let countsData = {
      counts: [
        {
          asset: asset,
          event: event
        }
      ]
    }

    fetch(COUNTS_RESOURCE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify(countsData)
    })
      .then(checkError)
      .then(
        (result) => {
          console.log('Success: ', result)
          setCount(result['counts'][0]['count'])
        },
        (error) => {
          console.error('Error: ', error)
        }
      )
      .catch((catchError) => {
        console.error('Catch: ', catchError)
      })
      .finally(() => {})
  }
}

export function getCounts(asset, event, setCount) {
  if (IS_DRY_RUN) {
    console.log('Dry run: getCounts skipped')
    setCount('0')
  } else {
    fetch(
      COUNTS_RESOURCE_URL + '?asset=' + asset + '&event=' + event,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        }
      }
    )
      .then(checkError)
      .then(
        (result) => {
          if (result['counts'].length > 0) {
            setCount(result['counts'][0]['count'])
          } else {
            setCount('0')
          }
          
        },
        (error) => {
          console.error('Error: ', error)
        }
      )
      .catch((catchError) => {
        console.log('Catch: ', catchError)
      })
      .finally(() => {})
  }
}
