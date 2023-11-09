import "./style.css"

function Checkboxes(categorias, categoriasCheckeadas, SetCategoriasCheckeadas ) {
   
    function filtrarCheckboxes(e) {

        const checkboxInput = e.target.value;
       
        if (e.target.checked) {
            let arrayCategorias = [...categoriasCheckeadas, checkboxInput]
            SetCategoriasCheckeadas(arrayCategorias)
           
            //... clona una array, objeto

        } else {
            let arrayCategorias = categoriasCheckeadas.filter((categoria) => categoria != checkboxInput)
            SetCategoriasCheckeadas(arrayCategorias)
  

        }

    }

    return (
        <>
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

        </>
    );
}
export default Checkboxes