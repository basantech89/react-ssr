export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, _, api) => {
  const res = await api.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, _, api) => {
  const res = await api.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  })
}

export const FETCH_ADMINS = 'fetch_admins'
export const fetchAdmins = () => async (dispatch, _, api) => {
  const res = await api.get('/admins')

  dispatch({
    type: FETCH_ADMINS,
    payload: res.data
  })
}
