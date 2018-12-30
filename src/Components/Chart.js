import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = canvas => {
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);

  gradient.addColorStop(0, 'rgba(167,123,89, 0.5)');
  gradient.addColorStop(0.5, 'rgba(167,112,189, 0.25)');
  gradient.addColorStop(1, 'rgba(211,123,89, 0)');
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Kraken',
        lineTension: 0.1,
        backgroundColor: gradient,
        borderColor: 'rgba(67,123,89,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(67,123,89,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(67,123,89,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [67, 39, 40, 79, 56, 55, 40]
      }
    ]
  };
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>Graph</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
