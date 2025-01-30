import React, { useContext } from "react";
import Inteface from "./Interface";
import { GenericDates,GenericDatesProvider } from "./GenericsDate";
import StackedBarChart from "./stackedBar";
import AddNumbers from "./addNumbers";
import Filter from "./filter";
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
      <StackedBarChart />
      <AddNumbers/>
      <Filter/>
    </GenericDatesProvider>

  );
}

export default App;








