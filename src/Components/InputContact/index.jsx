import "./style.css"


function inputContact() {
    return (
       <div className="contact-container">
      <div className="contact-content">
        <div className="title-contact-form">
          <h1>¿Te ayudamos?</h1>
        </div>
        <div className="form">
          <form
            action="mailto:juanpabloguingold@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input
              name="nombre"
              className="input"
              placeholder="Tu nombre"
              type={"text"}
              role="nameInput"
            />
            <input
              className="input"
              name="email"
              placeholder="Tu email"
              type={"email"}
             role="emailInput"
            />
           
            <textarea
              name="text"
              placeholder="Cuéntanos como te podemos ayudar"
              role="msgInput"
            />
            <div className="div-button">
              <button
                className="button-form-contact"
                type="submit"
                value={"submit"}
                role="btnSubmit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    );

}

export default inputContact