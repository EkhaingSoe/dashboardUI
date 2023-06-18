import React from 'react'
import ReactApexChart from 'react-apexcharts'
// import { CircularProgressbar } from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css';

const RadicalBar = () => {
 
    const options = {
          series: [44, 55, 67, 83],
          chart: {
          height: 350,
          id: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function () {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        // series: [44, 55, 67, 83],
        };
    return (
        // <>
        //     <CircularProgressbar value={70}/>
        // </>
    <ReactApexChart options={options} series={options.series} type='radicalBar'  />
  )
}

export default RadicalBar