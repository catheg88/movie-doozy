const express = require('express')
const apicache = require('apicache')
const path = require('path')
const request = require('request-promise')

// apicache.options({ debug: true })
const cache = apicache.middleware

// create server
const server = express()

// serve static files
server.use(express.static(path.join(__dirname, 'frontend')))

// api
const api_base = 'https://api.themoviedb.org/3/'

// enter api_key in terminal when starting node
const api_key = process.env.API_KEY

server.get('/api/popular', cache('5 minutes'), (req, res) => {
  console.log('route /api/popular')

  // mdb api request options
  const options = {
    method: 'GET',
    uri: api_base + 'movie/popular',
    qs: { api_key },
    json: true
  }

  request(options)
    .then(response => {
      res.send(response)
    })
    .catch(function(err) {
      console.log(err.message)
    })
})

server.get('/api/movie*', cache('5 minutes'), (req, res) => {
  console.log('route /api/movie')
  const id = req.url.split('/')[3] // get movie id from url

  // mdb api request options
  const options = {
    method: 'GET',
    uri: api_base + 'movie/' + id,
    qs: {
      api_key,
      append_to_response: 'credits'
    },
    json: true
  }

  request(options)
    .then(function(response) {
      res.send(response)
    })
    .catch(function(err) {
      console.log(err.message)
    })
})

server.get('/api/search/*', cache('5 minutes'), (req, res) => {
  console.log('route api/search')
  const searchString = req.url.split('/')[3] // get search query from url
  // console.log(searchString)

  if (!searchString) { // don't hit api with a blank query string
    res.send({})
  } else {
    const options = {
      method: 'GET',
      url: api_base + 'search/movie',
      qs: {
        api_key,
        query: searchString
      }
    }

    request(options)
      .then(response => {
        res.send(response)
      })
      .catch(function(err) {
        console.log(err.message)
      })
  }
})

// catch-all disabled
// server.get('/*', (req, res) => {
//   console.log('catch-all')
//   res.sendFile(path.join(__dirname, 'frontend/index.html'))
// })

const port = 3000
server.listen(port)
console.log('server listening on port ' + port)
console.log('*beep* if a robot could love, i would love movies. *boop*')
