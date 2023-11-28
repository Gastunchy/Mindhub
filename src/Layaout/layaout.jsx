import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Carousel from "../Components/carousel";


function Layout({children}){
    return(
        <>
        <div>
        <Header/>
        <Carousel/>
        {children}
        <Footer/>
        </div>
       
        </>
    );
}
export default Layout
