import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import moment from 'moment'

const ChartTide = () => {
  const forecastState = useSelector((state) => state.forecastSpot)

  const { data } = forecastState
  const { tides } = data

  console.log(tides)

  const timeLabelsTides =
    tides &&
    tides.map((hour) => moment(hour.time).format('h:mm:ss a')).slice(0, 4)

  const tideHeight = tides && tides.map(hour => hour.height)

  const dataPeriod = {
    labels: timeLabelsTides,
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
        data: tideHeight,
      },
      
    ],
  }

  return (

        <Line
          width={120}
          height={30}
          options={{ maintainAspectRatio: true }}
          data={dataPeriod}
        />

  )
}

export default ChartTide
