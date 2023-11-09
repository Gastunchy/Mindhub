import Layout from "../Layaout/layaout";
import "../App.css";

function Error() {
  return (
    <>
      <Layout>
        <div className="cardM">
          <div className="header"></div>
          <div className="card-body">
            <p className="card-text"> No existe esa Pagina.</p>
          </div>
          <div className="footerCard"></div>
        </div>
      </Layout>
    </>
  );
}

export default Error;




