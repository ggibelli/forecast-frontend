import React from 'react'
import { Bar } from 'react-chartjs-2'

const HeightChart = ({ day, dataChart }) => {
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
        data: dataChart.waveHeight,
        data1: dataChart.wavePeriod,
      },
      {
        label: 'Swell Height',
        backgroundColor: 'rgba(1,135,134,0.6)',
        borderColor: 'rgba(1,135,134,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(1,135,134,0.8)',
        hoverBorderColor: 'rgba(1,135,134,1)',
        data: dataChart.swellHeight,
        data1: dataChart.swellPeriod,
      },
      {
        label: 'Secondary Swell Height',
        backgroundColor: 'rgba(255,175,73,0.6)',
        borderColor: 'rgba(255,175,73,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,175,73,0.8)',
        hoverBorderColor: 'rgba(255,175,73,1)',
        data: dataChart.secSwellHeight,
        data1: dataChart.secSwellPeriod,
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
          }s`
        },
      },
    },
  }

  return <Bar data={dataHeight} options={options} />
}

export default HeightChart
