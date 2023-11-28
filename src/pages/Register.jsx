import Layout from "../Layaout/layaout";
import Register from "../Components/register/Register";

function RegisterPage(props) {

    return (
        <>
            <Layout title={props.title}>
                <Register></Register>
            </Layout>
        </>
    );
}

export default RegisterPage;