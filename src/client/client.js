import 'babel-polyfill' // define babel helper functions to make use of async/await and similar features
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from '../helpers/createStore'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(axiosInstance, window.INITIAL_STATE)

// Content is already rendered on the server in this root id element, we're not replacing all the HTML inside it
// we tell React to go back through and set up all the event listeners, etc. that needs to be executed to kind of
// bind to that existing structure that's on the page
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
