import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const dadosDia = ['January', 'February', 'March', 'April','Maio'] 

const dadosFatu = [65, 59, 80, 81,19]

const data = {
  labels:dadosDia,
  datasets: [
    {
      label: 'Sales',
      data: dadosFatu ,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
    },
  ],
};

function App() {
  return (
    <div style={{ width: '600px', margin: '50px auto' }}>
      <h2>Sales Data</h2>
      <Line data={data} />
    </div>
  );
}

export default App;
