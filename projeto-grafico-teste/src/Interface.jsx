import React from "react";
import { useContext } from "react";
import { GenericDates,GenericDatesProvider } from "./GenericsDate";
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

export default function Inteface(){
const { dados, atualizarDados } = useContext(GenericDates)


  const pegarDado = (dados.dia)
console.log(pegarDado)

  // const dadosDia = ['January', 'February', 'March', 'April','Maio'] 
  const dadosDia = dados.terrenos.map((_, index) => index + 1);
  // const testeDia = dados.dia
  // console.log(testeDia)
  
  // const dadosFatu = [65, 59, 80, 81,19,20,25,22,54,59,32]
  

  const cores = {
    terrenos: '#F27405',
    lojasP: '#6E0BF9',
    lojasM: '#350973',
    lojasG: '#331B8C',
  };
  
  const datasets = Object.entries(dados).map(([chave, valores]) => ({
    label: chave,
    data: valores,
    borderColor: cores[chave] || 'black', // Usa cor definida ou padrão
    backgroundColor: `${cores[chave] || 'black'}50`, // Cor com transparência
    tension: 0.4,
    fill: true,
  }));

  
  
  const data = {
    labels: dadosDia,
    datasets: datasets,
  };
  
  // const data = {




  //   labels:dadosDia,
  //   datasets: [
  //     // {
  //     //   label: 'Sales',
  //     //   data: dadosFatu ,
  //     //   borderColor: 'rgba(75, 192, 192, 1)',
  //     //   backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //     //   borderWidth: 2,
  //     // },
      
  //     {
  //       label: 'terrenos',
  //       data: [20, 18, 34, 41, 27, 34],
  //       borderColor: 'rgba(255, 92, 120, 1)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       tension: 0.4, // Linha suavizada
  //       fill: true,
  //     },  
  //     {
  //       label: 'lojasP',
  //       data: [18, 28, 24, 41, 27, 44],
  //       borderColor: 'rgb(118, 22, 43)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       tension: 0.4, // Linha suavizada
  //       fill: true,
  //     },
  //     {
  //       label: 'lojasM',
  //       data: [5, 15, 13, 25, 45, 27],
  //       borderColor: 'rgb(34, 60, 77)',
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     },
  //     {
  //       label: 'lojasG',
  //       data: [2, 12, 12, 32, 42, 52],
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     },
  //     {
  //       label: 'teste',
  //       data: dados.dadosFatu,
  //       borderColor: 'rgb(192, 75, 151)',
  //       backgroundColor: 'rgba(192, 174, 75, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     },
  //     {
  //       label: 'teste2',
  //       data: dados.dadosFatu2.terrenos,
  //       borderColor: 'rgb(182, 192, 75)',
  //       backgroundColor: 'rgba(192, 174, 75, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     }
    
  //   ],
    
  // };
  
        const config = {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
                beginAtZero: true,
              },
            },
          },
        };
  

return(
    <div>
            <div style={{ width: '600px', margin: '50px auto' }}>
              <h2>Sales Data</h2>
              <Line data={data} />
            </div>
    </div>
)


}