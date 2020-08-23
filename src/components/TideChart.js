import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const TideChart = ({ day }) => {
  const forecastState = useSelector(({ forecastSpot }) => forecastSpot.data)

  const { tides } = forecastState

  const tidesForTheDay = tides
    ? tides.filter((hour) => hour.time.includes(day))
    : null

  const tideLabels = tidesForTheDay
    ? tidesForTheDay.map((tide) =>
        tide.time.split('T')[1].split('+')[0].substring(0, 5),
      )
    : null
  const tideHeights = tidesForTheDay
    ? tidesForTheDay.map((tide) => tide.height.toFixed(2))
    : null

  const tideType = tidesForTheDay
    ? tidesForTheDay.map((tide) => tide.type)
    : null

  const dataPeriod = {
    labels: tideLabels,
    datasets: [
      {
        label: 'Tides',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(12,192,192,0.4)',
        borderColor: 'rgba(12,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(12,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(12,192,192,1)',
        pointHoverBorderColor: 'rgba(12,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: tideHeights,
        data1: tideType,
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
          } m ${
            data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
          }`
        },
      },
    },
  }

  return <Line data={dataPeriod} options={options} />
}

TideChart.propTypes = {
  day: PropTypes.string.isRequired,
}

export default TideChart
