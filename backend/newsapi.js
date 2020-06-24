const superagent = require('superagent')

const NEWS_API_URL = 'https://newsapi.org/v2'
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines'
const API_KEY = '11d68d82891f4a1ea0765b4d0192c519'

const EVERYTHING_ENDPOINT_PATH = "/everything";

const getMainArticles = query => superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({country: 'pl', ...query, apiKey: API_KEY})

const getPokemonsNews = query =>superagent
    .get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
    .query({
      language: "pl",
      ...query,
      apiKey: API_KEY,
      q: "pokemon",
      pageSize: 30
    });


module.exports = {
    getMainArticles,
    getPokemonsNews,
}


