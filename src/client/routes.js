import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
    loadData
  }
]

export default routes
