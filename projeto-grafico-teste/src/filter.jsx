import React from "react";
import { useContext } from "react";
import { GenericDates, GenericDatesProvider } from "./GenericsDate";

export default function Filter(){
const { dados, atualizarDados } = useContext(GenericDates);


const lojas = ["terrenos", "lojasP", "lojasM", "lojasG"];

const lojasSelecionadas = lojas.map((loja) => dados[loja].slice(-7));

const [lastArrayTerrenos, lastArrayLojasP, lastArrayLojasM, lastArrayLojasG] = lojasSelecionadas;

console.log(lastArrayTerrenos);
console.log(lastArrayLojasP);
console.log(lastArrayLojasM);
console.log(lastArrayLojasG);

 
 return(
     <div>
filter
     </div>
 )
}