import React, { createContext, useState } from "react";

const GenericDates = createContext()


const GenericDatesProvider = ({ children }) => {
  const [dados, setDados] = useState({
  //   dia: 1,
  //   dadosFatu: [65, 59, 80, 81, 19, 20, 25, 22, 54, 59, 32],
  //   dadosFatu2: [{
  //     terrenos: 1000,
  //     lojasP: 2000,
  //     lojasM: 3000,
  //     lojasG: 4000
  //   }, {
  //     terrenos: 1100,
  //     lojasP: 2030,
  //     lojasM: 3200,
  //     lojasG: 4400
  //   },
  //   {
  //     terrenos: 1300,
  //     lojasP: 2400,
  //     lojasM: 3040,
  //     lojasG: 4050
  //   }
  // ],

  //   1: {
  //     terrenos: 1000,
  //     lojasP: 2000,
  //     lojasM: 3000,
  //     lojasG: 4000
  //   },
  //   2: {
  //     terrenos: 1100,
  //     lojasP: 2030,
  //     lojasM: 3200,
  //     lojasG: 4400
  //   },
  //   3: {
  //     terrenos: 1300,
  //     lojasP: 2400,
  //     lojasM: 3040,
  //     lojasG: 4050
  //   },

  terrenos: [5, 8, 9, 15, 23, 26, 14, 25, 7, 14, 16, 13, 26, 5, 4, 5, 3, 6, 4, 5, 6, 4, 5, 3, 7, 3, 6, 5, 4, 5, 7, 8, 10, 12, 9, 15, 18, 22, 24, 20, 19, 17, 21, 23, 16, 11, 14, 13, 8, 6],
  lojasP: [18, 28, 24, 41, 27, 44, 36, 50, 20, 60, 55, 45, 39, 47, 52, 30, 70, 15, 90, 33, 77, 82, 66, 48, 95, 99, 29, 88, 40, 75, 85, 92, 58, 63, 79, 49, 68, 83, 91, 97, 55, 67, 81, 71, 74, 96, 89, 62, 78, 51],
  lojasM: [5, 15, 13, 25, 45, 27, 22, 30, 12, 40, 35, 28, 19, 50, 8, 55, 32, 60, 10, 48, 18, 57, 21, 43, 31, 52, 20, 39, 41, 65, 75, 80, 44, 56, 61, 37, 29, 53, 64, 70, 85, 33, 59, 47, 71, 68, 73, 82, 95, 100],
  lojasG: [2, 12, 12, 32, 42, 52, 15, 30, 8, 22, 50, 40, 28, 35, 48, 20, 60, 25, 45, 38, 14, 27, 19, 33, 55, 17, 31, 46, 29, 58, 62, 77, 70, 85, 63, 80, 79, 74, 67, 92, 95, 87, 100, 83, 99, 97, 72, 89, 68, 91]

  })


  const atualizarDados = (chave, novoValor) => {
    setDados(prevState => ({
      ...prevState,
      [chave]: novoValor
    }));
  };

  return (
    <GenericDates.Provider value={{ dados, atualizarDados }}>
      {children}
    </GenericDates.Provider>
  );
};

export { GenericDates, GenericDatesProvider };

