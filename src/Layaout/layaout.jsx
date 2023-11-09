import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


function Layout({children, title}){
    return(
        <>
        <div>
        <Header/>
        <Nav title={title}/>
        {children}
        <Footer/>
        </div>
       
        </>
    );
}
export default Layout
