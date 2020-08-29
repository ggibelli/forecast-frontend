import reducer from './login'

const user = { email: 'abc@cbd.com', token: 12345 }

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  it('should return the user data', () => {
    expect(
      reducer(
        {},
        {
          type: 'LOGIN',
          payload: user,
        },
      ),
    ).toEqual(user)
  })

  it('should return the clear notification action and no more message', () => {
    expect(reducer({}, { type: 'LOGOUT' })).toEqual(null)
  })
})
