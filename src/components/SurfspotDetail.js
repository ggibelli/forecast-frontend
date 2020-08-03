import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BoxLoading } from 'react-loadingg'
import { useHistory, useParams } from 'react-router-dom'
import { fetchSpot } from '../reducers/spotDetailReducer'

const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  useEffect(() => {
    if (surfSpot.isLoading) {
      return
    }
    dispatch(fetchSpot(id))
  }, [id])

  if (!surfSpot.isLoading) {
    return <div>{surfSpot.data.name}</div>
  }
  return (
    <div>
      <BoxLoading />
    </div>
  )
}

export default SpotDetail
