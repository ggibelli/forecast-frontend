import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import arrow from '../../static/windArrow.png'
import arrowCalm from '../../static/windArrowCalm.png'
import arrowMedium from '../../static/windArrowMedium.png'
import arrowStrong from '../../static/windArrowStrong.png'
import convertDegrees from '../../utils/degreesToDirection'

const WindChart = ({ day, dataChart }) => {
  const chartPoint = new Image()
  chartPoint.src = arrow
  const chartPointCalm = new Image()
  chartPointCalm.src = arrowCalm
  const chartPointMedium = new Image()
  chartPointMedium.src = arrowMedium
  const chartPointStrong = new Image()
  chartPointStrong.src = arrowStrong

  const windDirection = dataChart.forecastObject.map((forecast) =>
    forecast.windDirection.toFixed(0),
  )
  const windDegreeToString = windDirection.map((degrees) =>
    convertDegrees(degrees),
  )

  const windSpeed = dataChart.forecastObject.map((forecast) =>
    forecast.windSpeed.toFixed(2),
  )

  const windIcons = windSpeed.map((speed) => {
    if (speed > 3 && speed <= 5) return chartPoint
    if (speed > 5 && speed <= 8) return chartPointMedium
    if (speed > 8) return chartPointStrong
    return chartPointCalm
  })

  const dataPeriod = {
    labels: dataChart.timeLabelsForecast,
    datasets: [
      {
        label: 'Wind Speed',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(55,0,179,0.2)',
        borderColor: 'rgba(55,0,179,0.2)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(55,0,179,1)',
        pointBackgroundColor: '#D3C8EC',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(55,0,179,1)',
        pointHoverBorderColor: 'rgba(55,0,179,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: windIcons,
        rotation: windDirection,
        data: dataChart.forecastObject.map((forecast) =>
          forecast.windSpeed.toFixed(2),
        ),
        data1: dataChart.forecastObject.map((forecast) =>
          forecast.gust.toFixed(2),
        ),
        data2: windDirection,
        data3: windDegreeToString,
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
          } m/s ${
            data.datasets[tooltipItem.datasetIndex].data3[tooltipItem.index]
          } ${
            data.datasets[tooltipItem.datasetIndex].data2[tooltipItem.index]
          }°`
        },
        afterLabel(tooltipItem, data) {
          return `${
            data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
          } m/s gust`
        },
      },
    },
  }

  return <Line data={dataPeriod} options={options} />
}

WindChart.propTypes = {
  dataChart: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
}

export default WindChart
