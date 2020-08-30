import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import { addStarSpot, removeStarSpot, getProfile } from '../reducers/userDetail'

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
    if (starredSpot) {
      dispatch(removeStarSpot(id, spotId))
    } else {
      dispatch(addStarSpot(id, spotId))
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
      Save
    </Button>
  )
}

export default Starred
