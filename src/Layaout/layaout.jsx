import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Carousel from "../Components/carousel/Carousel";


function Layout({children}){
    return(
        <>
        <div>
        <Header/>
        {children}
        <Footer/>
        </div>
       
        </>
    );
}
export default Layout
