import React from 'react'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import convertDegrees from '../../utils/degreesToDirection'

const HeightChart = ({ day, dataChart }) => {
  const waveDirection = dataChart.forecastObject.map((forecast) =>
    forecast.waveDirection.toFixed(0),
  )
  const swellDirection = dataChart.forecastObject.map((forecast) =>
    forecast.swellDirection.toFixed(0),
  )
  const secSwellDirection = dataChart.forecastObject.map((forecast) =>
    forecast.secondarySwellDirection.toFixed(0),
  )
  const windWaveDirection = dataChart.forecastObject.map((forecast) =>
    forecast.windWaveDirection.toFixed(0),
  )
  const waveDegreeToString = waveDirection.map((degrees) =>
    convertDegrees(degrees),
  )
  const swellDegreeToString = swellDirection.map((degrees) =>
    convertDegrees(degrees),
  )
  const secSwellToString = secSwellDirection.map((degrees) =>
    convertDegrees(degrees),
  )
  const windWaveToString = windWaveDirection.map((degrees) =>
    convertDegrees(degrees),
  )
  const dataHeight = {
    labels: dataChart.timeLabelsForecast,
    datasets: [
      {
        label: 'Wave Height',
        backgroundColor: 'rgba(55,0,179,1)',
        borderColor: 'rgba(55,0,179,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(55,0,179,0.8)',
        hoverBorderColor: 'rgba(55,0,179,1)',
        data: dataChart.forecastObject.map((forecast) =>
          forecast.waveHeight.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.wavePeriod.toFixed(2),
        ),
        data2: waveDirection,
        data3: waveDegreeToString,
      },
      {
        label: 'Swell Height',
        backgroundColor: 'rgba(1,135,134,0.6)',
        borderColor: 'rgba(1,135,134,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(1,135,134,0.8)',
        hoverBorderColor: 'rgba(1,135,134,1)',
        data: dataChart.forecastObject.map((forecast) =>
          forecast.swellHeight.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.swellPeriod.toFixed(2),
        ),
        data2: swellDirection,
        data3: swellDegreeToString,
      },
      {
        label: 'Secondary Swell Height',
        backgroundColor: 'rgba(255,175,73,0.6)',
        borderColor: 'rgba(255,175,73,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,175,73,0.8)',
        hoverBorderColor: 'rgba(255,175,73,1)',
        data: dataChart.forecastObject.map((forecast) =>
          forecast.secondarySwellHeight.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.secondarySwellPeriod.toFixed(2),
        ),
        data2: secSwellDirection,
        data3: secSwellToString,
      },
      {
        label: 'Wind Wave Height',
        backgroundColor: 'rgba(211,200,236,0.6)',
        borderColor: 'rgba(211,200,236,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(211,200,236,10.8',
        hoverBorderColor: 'rgba(211,200,236,1)',
        data: dataChart.forecastObject.map((forecast) =>
          forecast.windWaveHeight.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.windWavePeriod.toFixed(2),
        ),
        data2: windWaveDirection,
        data3: windWaveToString,
      },
    ],
  }

  const options = {
    tooltips: {
      position: 'nearest',
      mode: 'label',
      callbacks: {
        title(tooltipItem, data) {
          return `${day} ${data.labels[tooltipItem[0].index]}`
        },

        label(tooltipItem, data) {
          return `${
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          }m at ${
            data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
          }s ${
            data.datasets[tooltipItem.datasetIndex].data3[tooltipItem.index]
          } ${
            data.datasets[tooltipItem.datasetIndex].data2[tooltipItem.index]
          }°`
        },
      },
    },
  }

  return <Bar data={dataHeight} options={options} />
}

HeightChart.propTypes = {
  dataChart: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
}

export default HeightChart
