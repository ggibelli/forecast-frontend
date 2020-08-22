import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const ChartTide = ({ day }) => {
  const forecastState = useSelector((state) => state.forecastSpot)

  const { data } = forecastState
  const { tides } = data

  const tidesForTheDay =
    tides && tides.filter((hour) => hour.time.includes(day))

  const tideLabels =
    tidesForTheDay &&
    tidesForTheDay.map((tide) => tide.time.split('T')[1].split('+')[0].substring(0, 5))
  const tideHeights =
    tidesForTheDay && tidesForTheDay.map((tide) => tide.height.toFixed(2))

  const dataPeriod = {
    labels: tideLabels,
    datasets: [
      {
        label: 'Tides',
        fill: false,
        lineTension: 0.7,
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
      },
    ],
  }

  return <Line data={dataPeriod} />
}

export default ChartTide
