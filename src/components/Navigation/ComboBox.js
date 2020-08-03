import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from 'react-redux'

export default function Grouped() {
  const surfSpots = useSelector((state) => state.spotsSearch)
  const options = surfSpots.map((spot) => {
    const region = spot.region.name
    const { name } = spot
    return {
      region,
      name,
    }

  })
  return (
    <Autocomplete
      id="grouped"
      options={options.sort((a, b) => a.region.localeCompare(b.region))}
      
      getOptionLabel={(spot) => spot.name}
      groupBy={(spot) => spot.region}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="surf spot.." variant="filled" />
      )}
    />
  )
}
