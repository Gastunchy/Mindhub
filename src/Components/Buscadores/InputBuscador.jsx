import "./style.css"
import ImgLupita from "../../assets/img/lupita.png"

    function Input() {
        return (
            <>
                <div className="contenedorGrandeInput">
                    <label htmlFor="">
                        <input type="text" ref={inputBuscador} onChange={filtroCruzado} />
                        <img src={ImgLupita} alt="" id="lupita" />
                    </label>
                </div>
            </>
        );
    }
export default Input