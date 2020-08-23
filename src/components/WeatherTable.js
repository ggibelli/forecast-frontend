import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const WeatherTable = ({ dataChart }) => {
  const { timeLabelsForecast, forecastObject } = dataChart

  const rows = forecastObject.map((forecast, i) => {
    const hour = timeLabelsForecast[i]
    return { hour, forecast }
  })

  return (
    <TableContainer component={Paper}>
      <Table aria-label="weather table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Air Temperature</TableCell>
            <TableCell align="right">Water temperature</TableCell>
            <TableCell align="right">Cloud Cover</TableCell>
            <TableCell align="right">Precipitation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell align="right">
                {row.forecast.airTemperature.toFixed(2)}°
              </TableCell>
              <TableCell align="right">
                {row.forecast.waterTemperature.toFixed(2)}°
              </TableCell>
              <TableCell align="right">
                {row.forecast.cloudCover.toFixed(2)}%
              </TableCell>
              <TableCell align="right">
                {row.forecast.precipitation.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

WeatherTable.propTypes = {
  dataChart: PropTypes.object.isRequired,
}

export default WeatherTable
