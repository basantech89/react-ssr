import React from 'react'

const HomePage = () => {
  return (
    <div>
      <p>This is the best 2 home page of our application.</p>
      <button onClick={() => console.log('Hi There!')}>Press me!</button>
    </div>
  )
}

export default {
  component: HomePage
}
