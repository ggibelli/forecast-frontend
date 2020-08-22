import React from 'react'
import { Line } from 'react-chartjs-2'

const PeriodChart = ({ day, dataChart }) => {
  const dataPeriod = {
    labels: dataChart.timeLabelsForecast,
    datasets: [
      {
        label: 'Wave Period',
        fill: false,
        lineTension: 0.1,
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
        data: dataChart.wavePeriod,
        data1: dataChart.waveHeight,
      },
      {
        label: 'Swell Period',
        fill: false,
        lineTension: 0.1,
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
        data: dataChart.swellPeriod,
        data1: dataChart.swellHeight,
      },
      {
        label: 'Secondary Swell Period',
        fill: false,
        lineTension: 0.1,
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
        data: dataChart.secSwellPeriod,
        data1: dataChart.secSwellHeight,
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
          }m`
        },
      },
    },
  }

  return <Line data={dataPeriod} options={options} />
}

export default PeriodChart
