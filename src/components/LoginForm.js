import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import loginService from '../services/login'
import { setNotification } from '../reducers/notificationReducer'
import storage from '../utils/storage'
import useField from '../utils/customHooks'

const LoginForm = () => {
  const username = useField('text')
  const password = useField('password')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })
      dispatch(login(user))
      dispatch(setNotification(`${user.name} welcome back!`))
      storage.saveUser(user)
    } catch (exception) {
      dispatch(setNotification('wrong username/password', 'error'))
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input {...username} />
        </div>
        <div>
          password
          <input {...password} />
        </div>
        <button id="login">login</button>
      </form>
    </div>
  )
}

export default LoginForm
