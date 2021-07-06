import axios from "axios";
import Top from '../layouts/Top';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';
import '../index.css'
import ProductsComponet from './ProductsComponet'
const Allproducts = () => {
    return ( 
       <>
        <Top/>
        <Menu/>

        <div className="container-fluid" id="product_banner">
            <h1>Product Page</h1>
            <p>We are trying Provides all kinds of good ReadyMade & Custom Dress</p>

        {/* top banner */}
        </div>

        <div className="contaciner">
            <div className="row" id="product_row">
                <h1>All Products</h1>
                <p>We are trying Provides all kinds of good ReadyMade & Custom Dress</p>
            </div>
       
        </div>

        <ProductsComponet/>
        <Footer/>
       </>
     );
}
 
export default Allproducts;