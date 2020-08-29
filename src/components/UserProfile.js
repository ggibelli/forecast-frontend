import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfile } from '../reducers/userDetail'

const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile(id))
  }, [dispatch])
  const profile = useSelector((state) => state.userProfile)
  if (!profile) return null
  return <div>can</div>
}

export default UserProfile
