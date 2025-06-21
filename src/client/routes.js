import App from './App'
import AdminsListPage from './pages/AdminsListPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UsersListPage from './pages/UsersListPage'

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      NotFoundPage
    ]
  }
]

export default routes
