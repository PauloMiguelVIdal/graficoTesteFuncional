import React, { use, useEffect } from "react";
import { useContext } from "react";
import { GenericDates, GenericDatesProvider } from "./GenericsDate";

export default function AddNumbers() {
    const { dados, atualizarDados } = useContext(GenericDates);

  
    const adicionar = () => { 
        // const geratorFatu = Math.random() * 100
        // console.log(geratorFatu)
        // dados.terrenos.push(geratorFatu) 
        dados.terrenos.push(10)
        dados.lojasP.push(20)
        dados.lojasM.push(30)
        dados.lojasG.push(40)
        console.log(dados.terrenos)
        
    
    
    }

    // useEffect(() => {
    //     alert(dados.terrenos.slice(-7))
    // },[dados.terrenos])


    return (
        <div>
            <button onClick={adicionar}>ad</button>
        </div>
    )
}