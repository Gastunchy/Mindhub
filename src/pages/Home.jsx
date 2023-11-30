import Layout from "../Layaout/layaout";
import { useEffect, useRef, useState } from "react";
import "../Components/Cards/style.css";
import ImgLupita from "../assets/img/lupita.png"
import "../Components/Buscadores/style.css"
import Card from "../Components/Cards/card";
import CardVacia from "../Components/Cards/cardVacia";
import { useSelector } from "react-redux";
import Carousel from "../Components/carousel/Carousel";


function Home({ title }) {

    let [categorias, SetCategorias] = useState([]);
    let [categoriasCheckeadas, SetCategoriasCheckeadas] = useState([]);
    let [EventosFiltrados, SetEventosFiltrados] = useState([]);
    let [eventosFiltradosOrginal, SetEventosFiltradosOriginal] = useState([]);

    let inputBuscador = useRef(null)


    const eventos = useSelector(store => store.eventos)

    useEffect(() => {
            filtroCruzado()
    }, [categoriasCheckeadas])


    useEffect(() => {
        if (title === "Futuro") {
            const eventosFuturo = eventos.filter((evento) => evento.estimate)
            console.log(eventosFuturo);
            SetEventosFiltrados(eventosFuturo);
            SetEventosFiltradosOriginal(eventosFuturo);
        }

        else if (title === "Pasado") {
            const eventosPasados = eventos.filter((evento) => evento.assistance)
            console.log(eventosPasados);
            SetEventosFiltrados(eventosPasados);
            SetEventosFiltradosOriginal(eventosPasados);
        }
        else {
            SetEventosFiltrados(eventos);
            SetEventosFiltradosOriginal(eventos);
        }

        let arrayCategorias = eventos.map((evento) => evento.category)
        arrayCategorias = new Set(arrayCategorias)
        arrayCategorias = Array.from(arrayCategorias)
        SetCategorias(arrayCategorias);

        //cuando cambie eventos se monta de nuevo.
    }, [eventos, title]);



    function filtrarCheckboxes(e) {

        const checkboxInput = e.target.value;

        if (e.target.checked) {
            let arrayCategorias = [...categoriasCheckeadas, checkboxInput]
            SetCategoriasCheckeadas(arrayCategorias)
            filtroCruzado()

        } else {
            let arrayCategorias = categoriasCheckeadas.filter((categoria) => categoria != checkboxInput)
            SetCategoriasCheckeadas(arrayCategorias)
            filtroCruzado()
        }

    }
    function filtroCruzado() {

        let input = inputBuscador.current.value;
        let arrayFiltrado = [];

        if (categoriasCheckeadas.length != 0) {

            arrayFiltrado = eventosFiltradosOrginal.filter(evento => {
                return categoriasCheckeadas.includes(evento.category)
            })
        } else {
            arrayFiltrado = eventosFiltradosOrginal;
        }

        arrayFiltrado = arrayFiltrado.filter((evento) => evento.name.toLowerCase()
            .includes(input.toLowerCase()) ||
            evento.category.toLowerCase().includes(input.toLowerCase()));

        SetEventosFiltrados(arrayFiltrado);
    }

    return (
        <Layout title={title}>
             <Carousel/>
            <div className="contenedorCheckboxesYInputs">

                <div className="contenedorGrandeCheck">
                    {
                        categorias.map((categoria) => (
                            <div className="CheckM" key={categoria._id}>
                                <input type="checkbox" id={categoria}
                                    name={categoria} className="form-check-input"
                                    onChange={(e) => filtrarCheckboxes(e)} value={categoria} />
                                <label className="card-text" htmlFor="checkboxs"> {categoria} </label>
                            </div>

                        )
                        )

                    }

                </div>
                <div className="contenedorGrandeInput">
                    <label htmlFor="">
                        <input type="text" ref={inputBuscador} onChange={filtroCruzado} />
                        <img src={ImgLupita} alt="" id="lupita" />
                    </label>
                </div>
            </div>



            <div className="contenedorCards">
                {
                    EventosFiltrados.length === 0 ? (
                        <CardVacia eventos={eventos} key={eventos.id} />
                    ) : (
                        EventosFiltrados.map((evento) => (<Card eventos={evento} key={evento.id} />
                        )))}
            </div>


        </Layout>
    );
}

export default Home;