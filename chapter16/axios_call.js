const axios = require('axios')

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res.data)
  })
  .catch(error => {
    console.error(error)
  })