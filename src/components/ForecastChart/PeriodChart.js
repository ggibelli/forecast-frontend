import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import arrow from '../../static/arrow.png'
import convertDegrees from '../../utils/degreesToDirection'

const PeriodChart = ({ day, dataChart }) => {
  const chartPoint = new Image()
  chartPoint.src = arrow

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

  const dataPeriod = {
    labels: dataChart.timeLabelsForecast,
    datasets: [
      {
        label: 'Wave Period',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(55,0,179,0.6)',
        borderColor: 'rgba(55,0,179,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(55,0,179,1)',
        pointBackgroundColor: '#3700b3',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(55,0,179,1)',
        pointHoverBorderColor: 'rgba(55,0,179,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: chartPoint,
        rotation: waveDirection,
        data: dataChart.forecastObject.map((forecast) =>
          forecast.wavePeriod.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.waveHeight.toFixed(2),
        ),
        data2: waveDirection,
        data3: waveDegreeToString,
      },
      {
        label: 'Swell Period',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(1,135,134,0.6)',
        borderColor: 'rgba(1,135,134,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(1,135,134,1)',
        pointBackgroundColor: '#018786',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(1,135,134,1)',
        pointHoverBorderColor: 'rgba(1,135,134,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: chartPoint,
        rotation: swellDirection,
        data: dataChart.forecastObject.map((forecast) =>
          forecast.swellPeriod.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.swellHeight.toFixed(2),
        ),
        data2: swellDirection,
        data3: swellDegreeToString,
      },
      {
        label: 'Secondary Swell Period',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(255,175,73,0.6)',
        borderColor: 'rgba(255,175,73,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,175,73,1)',
        pointBackgroundColor: '#FFAF49',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,175,73,1)',
        pointHoverBorderColor: 'rgba(255,175,73,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: chartPoint,
        rotation: secSwellDirection,
        data: dataChart.forecastObject.map((forecast) =>
          forecast.secondarySwellPeriod.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.secondarySwellHeight.toFixed(2),
        ),
        data2: secSwellDirection,
        data3: secSwellToString,
      },
      {
        label: 'Wind Wave Period',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(211,200,236,0.6)',
        borderColor: 'rgba(211,200,236,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(211,200,236,1)',
        pointBackgroundColor: '#D3C8EC',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(211,200,236,1)',
        pointHoverBorderColor: 'rgba(211,200,236,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: chartPoint,
        rotation: windWaveDirection,
        data: dataChart.forecastObject.map((forecast) =>
          forecast.windWavePeriod.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.windWaveHeight.toFixed(2),
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
          }s with ${
            data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
          } m ${
            data.datasets[tooltipItem.datasetIndex].data3[tooltipItem.index]
          } ${
            data.datasets[tooltipItem.datasetIndex].data2[tooltipItem.index]
          }°`
        },
      },
    },
  }

  return <Line data={dataPeriod} options={options} />
}

PeriodChart.propTypes = {
  dataChart: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
}

export default PeriodChart
