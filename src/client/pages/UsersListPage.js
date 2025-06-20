import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

function renderUsers(users) {
  return users.map(user => {
    return <li key={user.id}>{user.name}</li>
  })
}

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta
          property="og:title"
          content="Users App"
        />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{renderUsers(this.props.users)}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData
}
