import "./style.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

function tableUP() {
    const eventos = useSelector(store => store.eventos)
    let [categoriasFuturo, SetCategoriasFuturo] = useState([]);
    let [gananciasCategorias, SetGananciasCategorias] = useState([]);
    let [porcentajeAsistencia, SetPorcentajeAsistencia] = useState([]);
    let [contadorCategorias, SetContadorCategorias] = useState([]);
    let [porcentajeFinal, SetPorcentajeFinal] = useState([]);
    useEffect(() => {
        
                //arrayCategorias futuras, es igual al filtrado por las futuras, y por todas las categorias de todas las futuras
                // se unifican las categorias con new Set
                //y se transforma en Array
                let arrayCategoriasFuturas = eventos.filter((evento) => evento.estimate).map((evento) => evento.category)
                arrayCategoriasFuturas = new Set(arrayCategoriasFuturas)
                arrayCategoriasFuturas = Array.from(arrayCategoriasFuturas)

                //array de las futuras
                let arrayFuturos = eventos.filter((evento) => evento.estimate)

                //por cada evento de las futuras, se guardan las variables que vamos a usar para trabajar.
                for (const evento of arrayFuturos) {
                    const categoria = evento.category;
                    const precio = evento.price;
                    const estimado = evento.estimate;
                    const capacidad = evento.capacity;
                    const gananciaEvento = precio * estimado;

                    // Si la gananciascategorias [categoria] existe, sumale la ganancia
                    //si no, creala por primera vez  

                    if (gananciasCategorias[categoria]) {
                        gananciasCategorias[categoria] += gananciaEvento;
                    } else {
                        gananciasCategorias[categoria] = gananciaEvento;
                    }

                    if (porcentajeAsistencia[categoria]) {
                        porcentajeAsistencia[categoria] += (estimado * 100) / capacidad;
                        contadorCategorias[categoria] += 1
                    } else {
                        porcentajeAsistencia[categoria] = (estimado * 100) / capacidad;
                        contadorCategorias[categoria] = 1
                    }
                    porcentajeFinal[categoria] = porcentajeAsistencia[categoria] / contadorCategorias[categoria];

                }
                SetGananciasCategorias(gananciasCategorias)
                SetCategoriasFuturo(arrayCategoriasFuturas)
                SetPorcentajeFinal(porcentajeFinal)
      
    }, [eventos]);
    return (

        <table>
            <thead>
                <tr className="tituloTable">
                    <td>Proximos Eventos por Categoria</td>
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
                        {<div className="contenedorCat" key={eventos._id + "f"}>
                            {categoriasFuturo.map((categoria) =>
                                <td className="textTable">{categoria}</td>)}
                        </div>
                        }
                    </td>
                    <td className="textTable">
                        {<div className="contenedorCat" key={eventos._id + "a"}>
                            {categoriasFuturo.map((categoria) =>
                                <td className="textTable">${gananciasCategorias[categoria]}</td>)}
                        </div>
                        }
                    </td>
                    <td className="textTable">
                        {<div className="contenedorCat" key={eventos._id + "b"}>
                            {categoriasFuturo.map((categoria) =>
                                <td className="textTable">{porcentajeFinal[categoria].toFixed(2)}%</td>)}
                        </div>
                        }
                    </td>

                </tr>

            </tbody>
        </table>
    );
}

export default tableUP