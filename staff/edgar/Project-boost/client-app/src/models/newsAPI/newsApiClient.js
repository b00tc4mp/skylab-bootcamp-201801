const NewsAPI = require('./newsApiModel');

let newsAPIClient

(() => {


  const client = new NewsAPI(process.env.REACT_APP_API_KEY)

  newsAPIClient = {

    headlines: (q) => {

      return client.v2.topHeadlines({ ...q, noCache: true })

      .then(response => response.articles)

    },

    sources: (q) => {

      return client.v2.sources({ ...q, noCache: true })

      .then(response => response.sources)

    }

  }
})()

if (typeof module !== 'undefined') module.exports = newsAPIClient