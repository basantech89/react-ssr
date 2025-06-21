import 'babel-polyfill' // define babel helper functions to make use of async/await and similar features
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import routes from './client/routes'
import proxy from 'express-http-proxy'
import axios from 'axios'

const app = express()
const port = 3000
const apiBaseUrl = 'http://react-ssr-api.herokuapp.com'

app.use(
  '/api',
  proxy(apiBaseUrl, {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)

app.use(express.static('public'))

app.get('*', (req, res) => {
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: { cookie: req.get('cookie') || '' }
  })

  const store = createStore(axiosInstance)

  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.url) {
      return res.redirect(301, context.url)
    }

    if (context.NotFound) {
      // it's totally oky if we call status before we send the response back
      // later on we can send the content
      res.status(404)
    }

    res.send(content)
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
