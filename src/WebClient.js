const API_URL = 'https://5hljb37b6j.execute-api.us-east-1.amazonaws.com/v1'
const COUNTS_RESOURCE_URL = API_URL + '/counts'
const API_KEY = process.env.REACT_APP_EVENTS_COUNTER_API_KEY

async function checkError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return Promise.resolve(response.json())
  } else {
    const responseInJson = await Promise.resolve(response.json())
    return Promise.reject(responseInJson)
  }
}

export function postCounts(assetId, eventId, stepBy, count, setCount, dryRun) {
  if (!assetId ) {
    console.error('assetId is a required property!')
    return 
  }
  if (!eventId ) {
    console.error('eventId is a required property!')
    return 
  }
  if (dryRun) {
    console.log('Be aware! Its a dry run.')
    setCount(count + stepBy)
  } else {
    if (stepBy != 0) {
      console.log('Posting count by ' + stepBy)
      let countsData = {
        counts: [
          {
            assetId: assetId,
            eventId: eventId,
            stepBy: stepBy
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
          console.log('Catch: ', catchError)
        })
        .finally(() => {})
    } else {
      console.log('Posting of count skipped as stepBy is set to ' + stepBy)
    }
  }
}

export function getCounts(assetId, eventId, setCount, dryRun) {
  if (dryRun) {
    console.log('Be aware! Its a dry run.')
  } else {
    fetch(
      COUNTS_RESOURCE_URL + '?asset_id=' + assetId + '&event_id=' + eventId,
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
