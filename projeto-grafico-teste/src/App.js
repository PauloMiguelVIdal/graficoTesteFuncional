import React, { useContext } from "react";
import Inteface from "./Interface";
import { GenericDates,GenericDatesProvider } from "./GenericsDate";

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




function App() {


  
  return (
    <GenericDatesProvider>
      <Inteface />
    </GenericDatesProvider>

  );
}

export default App;








