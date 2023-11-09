import "./style.css"
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

function tablePast() {
    const eventos = useSelector(store => store.eventos)

    let [categoriasPasados, SetcategoriasPasados] = useState([]);
    let [gananciasCategoriasPasadas, SetGananciasCategoriasPasadas] = useState([]);
    let [porcentajeAsistenciaPasadas, SetPorcentajeAsistenciaPasadas] = useState([]);
    let [contadorCategoriasPasadas, SetContadorCategoriasPasadas] = useState([]);
    let [porcentajeFinalPasadas, SetPorcentajeFinalPasadas] = useState([]);
    useEffect(() => {
       
                let arrayCategoriasPasados = eventos.filter((evento) => evento.assistance).map((evento) => evento.category)
                arrayCategoriasPasados = new Set(arrayCategoriasPasados)
                arrayCategoriasPasados = Array.from(arrayCategoriasPasados)

                let arrayPasado = eventos.filter((evento) => evento.assistance)

                for (const evento of arrayPasado) {

                    const categoria = evento.category;
                    const precio = evento.price;
                    const asistencia = evento.assistance;
                    const capacidad = evento.capacity;
                    const gananciaEvento = precio * asistencia;

                    if (gananciasCategoriasPasadas[categoria]) {
                        gananciasCategoriasPasadas[categoria] += gananciaEvento;
                    } else {
                        gananciasCategoriasPasadas[categoria] = gananciaEvento;
                    }

                    if (porcentajeAsistenciaPasadas[categoria]) {
                        porcentajeAsistenciaPasadas[categoria] += (asistencia * 100) / capacidad;
                        contadorCategoriasPasadas[categoria] += 1
                    } else {
                        porcentajeAsistenciaPasadas[categoria] = (asistencia * 100) / capacidad;
                        contadorCategoriasPasadas[categoria] = 1
                    }
                    porcentajeFinalPasadas[categoria] = porcentajeAsistenciaPasadas[categoria]  / contadorCategoriasPasadas[categoria].toFixed(2);


                }

                SetGananciasCategoriasPasadas(gananciasCategoriasPasadas)
                SetcategoriasPasados(arrayCategoriasPasados)
                SetPorcentajeFinalPasadas(porcentajeFinalPasadas)
       
    }, []);
    return (

        <table>
            <thead>
                <tr className="tituloTable">
                    <td>Eventos finalizados por Categoria</td>
                </tr>
            </thead>
            <tbody>
                <tr className="subtituloTable">
                    <td className="subtituloTable">Categoria</td>
                    <td className="subtituloTable">Ganancias</td>
                    <td className="subtituloTable">Porcentaje de Asistencia</td>
                </tr>
                <tr className="textTable">

                    <td className="textTable">
                        {<div className="contenedorCat" key={eventos._id + "c"}>
                            {categoriasPasados.map((categoria) =>
                                <td className="textTable">{categoria}</td>)}
                        </div>
                        }
                    </td>
                    <td className="textTable">
                        {<div className="contenedorCat" key={eventos._id + "d"}>
                            {categoriasPasados.map((categoria) =>
                                <td className="textTable">${gananciasCategoriasPasadas[categoria]}</td>)}
                        </div>
                        }
                    </td>
                    <td className="textTable">
                        {<div className="contenedorCat" key={eventos._id + "e"}>
                            {categoriasPasados.map((categoria) =>
                                <td className="textTable">{porcentajeFinalPasadas[categoria].toFixed(2)}%</td>)}
                        </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default tablePast