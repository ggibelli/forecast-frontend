import reducer from './notification'

describe('Notification reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  it('should return the notification message and type', () => {
    expect(
      reducer(
        {},
        {
          type: 'SET_NOTIFICATION',
          payload: {
            message: 'asd',
            type: 'success',
          },
        },
      ),
    ).toEqual({
      message: 'asd',
      type: 'success',
    })
  })

  it('should return the clear notification action and no more message', () => {
    expect(reducer({}, { type: 'CLEAR_NOTIFICATION' })).toEqual(null)
  })
})
