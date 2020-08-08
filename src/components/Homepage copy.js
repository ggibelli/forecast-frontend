import React, { useEffect } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../index.css'

import useSwr from 'swr'
import { useSelector, useDispatch } from 'react-redux'

const fetcher = (...args) => fetch(...args).then((response) => response.json())

export default function Homepage({ map, dispatchAction }) {
  const data = useSelector({ surfSpots, mapToShow })
  const dispatch = useDispatch()
  useEffect(() => map && dispatch(dispatchAction(map.id)))
  console.log(surfSpots, mapToShow)
  return (
    <Map center={[52.6376, -1.135171]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {crimes.map((crime) => (
        <Marker
          key={crime.id}
          position={[crime.location.latitude, crime.location.longitude]}
        />
      ))}
    </Map>
  )
}
