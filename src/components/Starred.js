import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import { addStarSpot, removeStarSpot, getProfile } from '../reducers/userDetail'
import { setNotification } from '../reducers/notification'

const Starred = ({ spotId }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.currentUser)
  const profile = useSelector((state) => state.userProfile)
  const id = user ? user.id : null
  useEffect(() => {
    if (profile) return
    if (id) dispatch(getProfile(id))
  }, [])

  const starredSpot = profile
    ? profile.starredSpots.find((spot) => spot === spotId)
    : null
  const icon = starredSpot ? <StarIcon /> : <StarBorderIcon />
  const handleClick = () => {
    if (profile) {
      if (starredSpot) {
        dispatch(removeStarSpot(id, spotId))
      } else {
        dispatch(addStarSpot(id, spotId))
      }
    } else {
      dispatch(setNotification('Only logged users can star a spot', 'warning'))
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      size="small"
      startIcon={icon}
    >
      {starredSpot ? 'Saved' : 'Save'}
    </Button>
  )
}

Starred.propTypes = {
  spotId: PropTypes.string.isRequired,
}

export default Starred
