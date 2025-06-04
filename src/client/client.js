import 'babel-polyfill' // define babel helper functions to make use of async/await and similar features
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from '../helpers/createStore'

const store = createStore()

// Content is already rendered on the server in this root id element, we're not replacing all the HTML inside it
// we tell React to go back through and set up all the event listeners, etc. that needs to be executed to kind of 
// bind to that existing structure that's on the page
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)
