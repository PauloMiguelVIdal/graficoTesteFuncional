import React from "react";
import { useContext } from "react";
import { GenericDates, GenericDatesProvider } from "./GenericsDate";
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

export default function Interface() {
  const { dados, atualizarDados } = useContext(GenericDates);

  const pegarDado = dados.dia;
  console.log(pegarDado);

  const dadosDia = dados.terrenos.map((_, index) => index + 1);

  const cores = {
    terrenos: 
    '#005F73',
    lojasP: '#F27405',
    lojasM: '#6411D9',
    lojasG: 
    '#FFD700',
  };

  const datasets = Object.entries(dados).map(([chave, valores]) => ({
    label: chave,
    data: valores,
    borderColor: cores[chave].replace("0.5", "1"), // Linha mais visível
    backgroundColor: cores[chave], // Preenchimento com opacidade
    tension: 0.4,
    fill: true, // Preenche a área abaixo da linha
    pointRadius: 1, // Diminui o tamanho dos pontos
    pointHoverRadius: 5, // Ajusta o tamanho ao passar o mouse
    pointBorderWidth: 1, // Espessura da borda dos pontos
  }));

  const data = {
    labels: dadosDia,
    datasets: datasets,
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          font: {
            size: 20,
            weight: 'bold',
            family: 'Arial',
          },
        },
        legend: {
          labels: {
            color: '#6411D9', // Cor do texto da legenda
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          // display:false,
          grid: {
            display: false, // Remove as linhas da grade no eixo X
          },
          beginAtZero: true,
          ticks: {
            color: '#6411D9', // Cor do texto no eixo X
          },
        },
        y: {
          // display:false,
          grid: {
            // display: false, // Remove as linhas da grade no eixo X
          },
          beginAtZero: true,
          ticks: {
            color: '#6411D9', // Cor do texto no eixo Y
          },
        },
      },
      elements: {
        line: {
          fill: true, // Garante que a área seja preenchida
        },
      },
    },
  };

  return (
    <div>
      <div style={{ width: '900px', margin: '50px auto', backgroundColor: '#6E0BF980' }}>
        <Line data={data} options={config.options} />
      </div>
    </div>
  );
}