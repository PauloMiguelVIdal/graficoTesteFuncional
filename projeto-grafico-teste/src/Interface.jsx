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
  Filler,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
    Filler,
  Legend
);


export default function Interface() {
  const { dados, atualizarDados } = useContext(GenericDates);

  const pegarDado = dados.dia;
  console.log(pegarDado);

  const dadosDia = dados.terrenos.map((_, index) => index + 1);

  const cores = {
    // terrenos: 
    // '#005F7390',
    // lojasP: '#F2740590',
    // lojasM: '#6411D990',
    // lojasG: 
    // '#FFD70090',

    // terrenos: 
    // // '#005F73',
    // '#6E0BF980',
    // lojasP: 
    // '#6411D980',
    // // '#F27405',
    // lojasM: 
    // '#331B8C80',
    // // lojasM: '#6411D9',
    // lojasG: 
    // '#35097380',
    // // '#FFD700',


  //   terrenos: 
  //   // '#005F73',
  //   '#6E0BF970',
  //   lojasP: 
  //   '#6411D970',
  //   // '#F27405',
  //   lojasM: 
  //   '#331B8C70',
  //   // lojasM: '#6411D9',
  //   lojasG: 
  //   '#35097370',
  //   // '#FFD700',
  // };

    terrenos: 
    '#FF7F32 ',
    // '#005F73',
    lojasP: 
    // '#F27405',
    '#6411D9',
    lojasM: 
    '#F27405',
    // lojasM: '#6411D9',
    lojasG: 
    '#3A0E8C ',
    // '#FFD700',
  };

  const datasets = Object.entries(dados).map(([chave, valores]) => ({
    label: chave,
    data: valores,
    borderColor: cores[chave].replace("0.5", "1"), // Linha mais visível
    backgroundColor: cores[chave], // Preenchimento com opacidade
    tension: 0.4,
    fill: true, // Preenche a área abaixo da linha
    pointRadius: 0, // Diminui o tamanho dos pontos
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
          display:false,
          grid: {
            display: false, // Remove as linhas da grade no eixo X
          },
          beginAtZero: false,
          ticks: {
            color: '#6411D9', // Cor do texto no eixo X
          },
        },
        y: {
          display:false,
          grid: {
            display: true, // Remove as linhas da grade no eixo X
          },
          beginAtZero: false,
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
      <div style={{ width: '900px', margin: '50px auto', backgroundColor:'#6E0BF920' }}>
        <Line data={data} options={config.options} />
      </div>
    </div>
  );
}

// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler, // Importante para ativar o preenchimento!
// } from "chart.js";

// // Registra os componentes necessários
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// export default function AreaChart() {
//   const data = {
//     labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"], // Eixo X
//     datasets: [
//       {
//         label: "Terrenos",
//         data: [20, 18, 34, 41, 27],
//         borderColor: "#F29905",
//         backgroundColor: "rgba(242, 153, 5, 0.5)", // Transparência para efeito suave
//         tension: 0.4,
//         fill: "start", // Garante que preencha até o eixo Y
//       },
//       {
//         label: "Lojas Pequenas",
//         data: [18, 28, 24, 41, 27],
//         borderColor: "#F27405",
//         backgroundColor: "rgba(242, 116, 5, 0.5)",
//         tension: 0.4,
//         fill: "start",
//       },
//       {
//         label: "Lojas Médias",
//         data: [5, 15, 13, 25, 45],
//         borderColor: "#F22105",
//         backgroundColor: "rgba(242, 33, 5, 0.5)",
//         tension: 0.4,
//         fill: "start",
//       },
//       {
//         label: "Lojas Grandes",
//         data: [2, 12, 12, 32, 42],
//         borderColor: "#F2B605",
//         backgroundColor: "rgba(242, 182, 5, 0.5)",
//         tension: 0.4,
//         fill: "start",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Gráfico de Área",
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#333",
//         },
//       },
//       y: {
//         ticks: {
//           color: "#333",
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div style={{ width: "900px", margin: "50px auto" }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// }
