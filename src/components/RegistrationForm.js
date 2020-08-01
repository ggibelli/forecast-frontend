import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/userReducer'
import registrationService from '../services/registration'
import { setNotification } from '../reducers/notificationReducer'
import storage from '../utils/storage'
import customHooks from '../utils/customHooks'

const RegistrationForm = () => {
  const username = customHooks.useField('text')
  const password = customHooks.useField('password')
  const name = customHooks.useField('text')
  const email = customHooks.useField('email')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleRegistration = async (event) => {
    event.preventDefault()
    try {
      const user = await registrationService.register({
        username: username.value,
        password: password.value,
        name: name.value,
        email: email.value,
      })
      // dispatch(login(user))
      dispatch(setNotification(`${user.name} welcome aboard!`))
      storage.saveUser(user)
      dispatch(login(user))
      history.push('/')
    } catch (exception) {
      dispatch(setNotification(exception.response.data.error, 'error'))
    }
  }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <div>
          username
          <input {...username} />
        </div>
        <div>
          email
          <input {...email} />
        </div>
        <div>
          name
          <input {...name} />
        </div>
        <div>
          password
          <input {...password} />
        </div>
        <button type="submit" id="registration">
          register
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
