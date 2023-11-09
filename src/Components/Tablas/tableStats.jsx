import { useEffect, useState } from "react";
import "./style.css"
import { useSelector } from 'react-redux'


    

function tableStats() {
    const eventos = useSelector(store => store.eventos)
    
    let [eventoMayor, SetEventoMayor] = useState([]);
    let [eventoMenor, SetEventoMenor] = useState([]);
    let [mayorCap, SetMayorCap] = useState([]);

    useEffect(() => {
      
              
                let mayor = eventos[0];
                for (const evento of eventos) {
                    if (evento.assistance > mayor.assistance) {
                        mayor = evento;
                    }
                }
                //Calcular el menor, con la primera posicion (0) del Array, y mediante el for
                //itera si es menor al siguiente y lo guarda o no.
                let menor = eventos[0];
                for (const evento of eventos) {
                    if (evento.assistance < menor.assistance) {
                        menor = evento;
                    }
                }
                //Calcular la mayor Capacidad, con la primera posicion (0) del Array, y mediante el for
                //itera si es mayor al siguiente y lo guarda o no.
                let mayorCapacidad = eventos[0];
                for (const evento of eventos) {
                    if (evento.capacity > mayorCapacidad.capacity) {
                        mayorCapacidad = evento;
                    }
                }
                SetEventoMayor(mayor)
                SetEventoMenor(menor)
                SetMayorCap(mayorCapacidad)
        
        }, [eventos]);

    return (

        <table>
            <thead>
                <tr className="tituloTable" >
                    <td>Estadisticas de Eventos</td>
                </tr>
            </thead>
            <tbody>
                <tr className="subtituloTable">
                    <td className="subtituloTable">Eventos con mayor porcentaje de asistencia</td>
                    <td className="subtituloTable">Eventos con menor porcentaje de asistencia</td>
                    <td className="subtituloTable">Evento con mayor capacidad</td>
                </tr>

                <tr id="mayorAsistenciaRow" className="textTable">
                    <td className="textTable">El evento con mas Asistencias es: {eventoMayor.name} con: {eventoMayor.assistance} Asistentes</td>
                    <td className="textTable">El evento con menos Asistentes es: {eventoMenor.name} con: {eventoMenor.assistance} Asistentes </td>
                    <td className="textTable">El evento con mas capacidad es: {mayorCap.name} con : {mayorCap.capacity} Butacas  </td>
                </tr>

            </tbody>
        </table>
    );
}

export default tableStats