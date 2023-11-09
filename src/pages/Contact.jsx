import Layout from "../Layaout/layaout";
import InputContact from "../Components/InputContact";

function Contact(props) {

    return (
        <>
            <Layout title={props.title}>
                <InputContact></InputContact>
            </Layout>
        </>
    );
}

export default Contact;