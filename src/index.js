import 'babel-polyfill' // define babel helper functions to make use of async/await and similar features
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import routes from './client/routes'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
