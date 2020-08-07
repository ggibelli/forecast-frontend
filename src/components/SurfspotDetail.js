import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BoxLoading } from 'react-loadingg'
import { useParams } from 'react-router-dom'
import { fetchSpot } from '../reducers/spotDetail'
import { fetchForecast } from '../reducers/forecastSpot'

const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  const forecast = useSelector((state) => state.forecastSpot)
  const forecastId = surfSpot.data.forecast && surfSpot.data.forecast.id
  useEffect(() => {
    dispatch(fetchSpot(id))
  }, [id, dispatch])
  useEffect(() => {
    if (forecastId) dispatch(fetchForecast(forecastId))
  }, [forecastId, dispatch])

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
