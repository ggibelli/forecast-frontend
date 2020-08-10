import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../index.css'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMap } from '../reducers/maps'

// in verita homepage ti chiede: scegli il continente -> da li prendo le coordinate del MAP center e anche che endpoint usare per i popup

export default function Homepage() {
  const { id, area } = useParams()
  const dispatch = useDispatch()
  const [activePopup, setActivePopup] = useState(null)
  useEffect(() => {
    dispatch(fetchMap(id, area))
  }, [id, area, dispatch])
  const mapData = useSelector((state) => state.mapToShow)
  let mapToShow
  if (!mapData.isLoading && Object.entries(mapData.data).length !== 0) {
    mapToShow = mapData.data
  }
  const rawCoordinates = []
  const errorLoading = (message) => <div>{message}</div>
  if (mapData.errorMessage) return errorLoading(mapData.errorMessage)

  if (mapToShow && mapToShow.countries && area === 'continents') {
    rawCoordinates.push(
      mapToShow.countries
        .map((country) => country.regions)
        .flat()
        .map((region) => region.surfSpots)
        .map((spots) => spots.flat()),
    )
  }

  if (mapToShow && mapToShow.regions && area === 'countries') {
    rawCoordinates.push(
      mapToShow.regions
        .map((region) => region.surfSpots)
        .map((spots) => spots.flat()),
    )
  }

  if (mapToShow && mapToShow.surfSpots && area === 'regions') {
    rawCoordinates.push(
      mapToShow.surfSpots.filter((spot) => spot.latitude !== 'unknown'),
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

  if (mapData.isLoading || Object.entries(mapData.data).length === 0)
    return <Skeleton variant="rect" width="100%" height="70vh" />
  return (
    <Map center={[mapToShow.latitude, mapToShow.longitude]} zoom={zoom}>
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
      {activePopup && (
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
      )}
    </Map>
  )
}
