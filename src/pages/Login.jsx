import Layout from "../Layaout/layaout";
import Login from "../Components/login/Login";

function LoginPage(props) {

    return (
        <>
            <Layout title={props.title}>
                <Login></Login>
            </Layout>
        </>
    );
}

export default LoginPage;