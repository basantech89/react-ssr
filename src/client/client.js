import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

// Content is already rendered on the server in this root id element, we're not replacing all the HTML inside it
// we tell React to go back through and set up all the event listeners, etc. that needs to be executed to kind of 
// bind to that existing structure that's on the page
ReactDOM.hydrate(<Home />, document.getElementById('root'))
