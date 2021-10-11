import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import {
  addStarSpot,
  removeStarSpot,
  getProfile,
} from '../../reducers/userDetail'
import { setNotification } from '../../reducers/notification'

// i need to add the full spot and not only the id to make it work again.. that's why i need test
const Starred = ({ spotId }) => {
  const [isMounted, setIsMounted] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.currentUser)
  const profile = useSelector((state) => state.userProfile)
  const id = user?.id
  useEffect(() => {
    if (id && isMounted) {
      dispatch(getProfile(id))
    }
  }, [isMounted, id, dispatch])

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const starredSpot = profile?.starredSpots?.find((spot) => spot.id === spotId)

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
