import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 150, 200, 180, 250],
        backgroundColor: 'rgba(75,192,192,0.6)', // Bar colors
      },
    ],
  };

  const BarChart = () => {
    return (
      <div>
        <Bar data={data} />
      </div>
    );
  };
  
  export default BarChart;