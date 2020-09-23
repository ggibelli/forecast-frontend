import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {
  getProfile,
  addStarSpot,
  removeStarSpot,
  removeCreated,
} from './userDetail'

import userService from '../services/users'

jest.mock('../services/users')

const spotIdStar = '987654321'

const profilePayload = {
  starredSpots: [
    {
      name: 'surf',
      id: spotIdStar,
    },
  ],
  createdSpots: [{ name: 'created', id: spotIdStar }],
  username: 'gio',
  firstName: 'vanni',
  lastName: 'prova',
  email: 'lol@cio.ta',
  id: '12345',
}

const initialState = {
  starredSpots: [],
  createdSpots: [],
  username: '',
  firstName: '',
  email: '',
  id: '',
}

const surfSpot = {
  name: 'surfspot',
  id: '123456789',
}

const mockStore = configureMockStore([thunk])

describe('User detail reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should return the user profile when the request is made', () => {
    expect(reducer({}, { type: 'PROFILE', data: profilePayload })).toEqual(
      profilePayload,
    )
  })

  it('should return the starred spot when a surfspot is starred', () => {
    expect(
      reducer(profilePayload, { type: 'ADD_STAR', data: surfSpot }),
    ).toEqual({
      ...profilePayload,
      starredSpots: profilePayload.starredSpots.concat(surfSpot),
    })
  })

  it('should return the spot id when the starred spot is removed', () => {
    expect(
      reducer(profilePayload, { type: 'REMOVE_STAR', data: spotIdStar }),
    ).toEqual({
      ...profilePayload,
      starredSpots: profilePayload.starredSpots.filter(
        (spot) => spot.id !== spotIdStar,
      ),
    })
  })

  it('should return the spot id when the created spot is removed', () => {
    expect(
      reducer(profilePayload, { type: 'REMOVE_CREATED', data: spotIdStar }),
    ).toEqual({
      ...profilePayload,
      createdSpots: profilePayload.starredSpots.filter(
        (spot) => spot.id !== spotIdStar,
      ),
    })
  })
})

describe('User detail reducer thunk', () => {
  it('creates user profile action', async () => {
    // Arrange
    const id = 12345
    const store = mockStore({})
    userService.getUser.mockResolvedValueOnce(profilePayload)

    // Act
    await store.dispatch(getProfile(id))

    // Assert
    const expectedActions = [{ type: 'PROFILE', data: profilePayload }]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create add star spot action', async () => {
    // Arrange
    const id = 123
    const responsePayload = {
      name: 'supertubos',
      id: '12345',
    }
    const spotId = 321
    const store = mockStore({})

    userService.addStarred.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(addStarSpot(id, spotId))

    // Assert
    const expectedActions = [{ type: 'ADD_STAR', data: responsePayload }]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create remove star spot action', async () => {
    // Arrange
    const id = 123
    const responsePayload = {
      name: 'supertubos',
      id: '12345',
    }
    const spotId = 321
    const store = mockStore({})

    userService.removeStarred.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(removeStarSpot(id, spotId))

    // Assert
    const expectedActions = [{ type: 'REMOVE_STAR', data: responsePayload }]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create remove created spot action', () => {
    // Arrange
    const spotId = 321
    const store = mockStore({})

    // Act
    store.dispatch(removeCreated(spotId))

    // Assert
    const expectedActions = [{ type: 'REMOVE_CREATED', data: spotId }]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
