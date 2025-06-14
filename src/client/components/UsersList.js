import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

function renderUsers(users) {
  return users.map(user => {
    return (
      <li key={user.id}>
        {user.name}
      </li>
    )
  })
}


class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{renderUsers(this.props.users)}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)
