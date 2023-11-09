import "./style.css"


function inputContact() {
    return (
        <div className="contenedorForm">
            <form action="" className="">
                <div className="formContact">
                <label htmlfor="inputNombre">Name:<input role="nameInput"type="text" id="inputNombre" name="" className="form-control" /></label>
                <label htmlfor="inputEmail">Email:<input role="emailInput"type="email" name="inputEmail" id="inputEmail" className="form-control" /></label>
                <label htmlfor="mensaje">Message:<input role="msgInput"type="textarea" name="mensaje" id="mensaje" className="form-control" /></label>
                <input type="button" value="Submit"role="btnSubmit" className="btn btn-danger" />
                </div>
            </form>
        </div>

    );

}

export default inputContact