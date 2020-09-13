import React, { useRef } from 'react'
import Togglable from './Navigation/Togglable'
import Map from './Map'

// magari lista divisa per continenti e paesi piu un componente togglable che mostra mappa e chiede posizione

const HomePage = () => {
  const mapRef = React.createRef()
  return (
    <div>
      <Togglable buttonLabel="show map" ref={mapRef}>
        <Map />
      </Togglable>
    </div>
  )
}

export default HomePage
