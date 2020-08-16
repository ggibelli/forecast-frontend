import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../index.css'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usePosition } from 'use-position'
import { fetchMap } from '../reducers/maps'
import { setNotification } from '../reducers/notification'
import distanceHelper from '../utils/findNearestSpot'

export default function Homepage() {
  const dispatch = useDispatch()
  const surfSpots = useSelector((state) => state.surfspots)
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.mapToShow,
  )
  const flatSpots = surfSpots
    ? surfSpots
        .map((continent) => continent.countries)
        .flat()
        .map((country) => country.regions)
        .flat()
    : null
  let { id, area } = useParams()
  const { latitude, longitude, error } = usePosition()
  if (!id || !area) {
    const distanceRegions = flatSpots.map((spot) =>
      distanceHelper.distance(spot, latitude, longitude),
    )
    const closestRegion = distanceHelper.findClosestRegion(distanceRegions)
    id = closestRegion ? closestRegion[1] : null
    area = 'regions'
  }

  const [activePopup, setActivePopup] = useState(null)
  useEffect(() => {
    if (id && area) dispatch(fetchMap(id, area))
  }, [id, area, dispatch])

  const rawCoordinates = []
  const errorLoading = (message) => <div>{message}</div>
  if (error) {
    dispatch(setNotification(error, 'error'))
    return <div>Error GPS</div>
  }
  if (errorMessage) return errorLoading(errorMessage)

  if (data && data.countries && area === 'continents') {
    rawCoordinates.push(
      data.countries
        .map((country) => country.regions)
        .flat()
        .map((region) => region.surfSpots)
        .map((spots) => spots.flat()),
    )
  }

  if (data && data.regions && area === 'countries') {
    rawCoordinates.push(
      data.regions
        .map((region) => region.surfSpots)
        .map((spots) => spots.flat()),
    )
  }

  if (data && data.surfSpots && area === 'regions') {
    rawCoordinates.push(
      data.surfSpots.filter((spot) => spot.latitude !== 'unknown'),
    )
  }

  let zoom
  if (area === 'continents') {
    zoom = 3
  } else if (area === 'countries') {
    zoom = 5
  } else if (area === 'regions') {
    zoom = 9
  }
  const coordinates = rawCoordinates
    .flat(2)
    .filter((spot) => spot.latitude !== 'unknown')

  if (isLoading || Object.entries(data).length === 0)
    return <Skeleton variant="rect" width="100%" height="70vh" />
  return (
    <Map center={[data.latitude, data.longitude]} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {coordinates.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          onClick={() => {
            setActivePopup(spot)
          }}
        />
      ))}
      {activePopup ? (
        <Popup
          position={[activePopup.latitude, activePopup.longitude]}
          onClose={() => {
            setActivePopup(null)
          }}
        >
          <div>
            <Button
              component={Link}
              to={`/surfspots/${activePopup.id}`}
              color="default"
            >
              {activePopup.name}
            </Button>
          </div>
        </Popup>
      ) : null}
    </Map>
  )
}
