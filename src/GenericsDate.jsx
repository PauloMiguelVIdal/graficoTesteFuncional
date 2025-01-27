import React, { createContext,useState } from "react";

const GenericDates = createContext()


const GenericDatesProvider = ({ children }) => {
    const [dados, setDados] = useState({
      dia:1,
        1: {
            terrenos: 1000,
            lojasP: 2000,
            lojasM: 3000,
            lojasG: 4000
        },
        2: {
            terrenos: 1100,
            lojasP: 2030,
            lojasM: 3200,
            lojasG: 4400
        },
        3: {
            terrenos: 1300,
            lojasP: 2400,
            lojasM: 3040,
            lojasG: 4050
        },
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

  