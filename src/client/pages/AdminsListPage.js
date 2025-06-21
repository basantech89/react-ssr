import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

function renderAdmins(admins) {
  return admins.map(admin => {
    return <li key={admin.id}>{admin.name}</li>
  })
}

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  render() {
    return (
      <div>
        <h3>Here's a big protected list of admins:</h3>
        <ul>{renderAdmins(this.props.admins)}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { admins: state.admins }
}

function loadData(store) {
  return store.dispatch(fetchAdmins())
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData
}
