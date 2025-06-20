import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function requireAuth(ChildComponent) {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(RequireAuth)
}
