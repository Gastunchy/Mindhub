import Layout from "../Layaout/layaout";
import "../Components/Tablas/style.css"
import TableStats from "../Components/Tablas/tableStats";
import TableUP from "../Components/Tablas/tableUp";
import TablePast from "../Components/Tablas/tablePast";



function Stats({ title }) {

    return (
        <>
            <Layout title={title} >
                <TableStats />
                <TableUP />
                <TablePast />
            </Layout>
        </>
    );
}

export default Stats;