import React, { useEffect, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../index.css'

import useSwr from 'swr'
import { useSelector, useDispatch } from 'react-redux'

// in verita homepage ti chiede: scegli il continente -> da li prendo le coordinate del MAP center e anche che endpoint usare per i popup

export default function Homepage() {
  const data = useSelector(({ surfspots }) => surfspots.map(continent => continent.countries)).flat()
  console.log(data.flat())
  const [activeCountry, setActiveCountry] = useState(null)

  if (!data) return null
  return (
    <Map center={[20, 0]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data.map((country) => (
        <Marker
          key={country.id}
          position={[country.latitude, country.longitude]}
          onClick={() => {
            setActiveCountry(country)
          }}
        />
      ))}
      {activeCountry && (
        <Popup
          position={[activeCountry.latitude, activeCountry.longitude]}
          onClose={() => {
            setActiveCountry(null)
          }}
        >
          <div>
            <h2>{activeCountry.name}</h2>
          </div>
        </Popup>
      )}
    </Map>
  )
}
