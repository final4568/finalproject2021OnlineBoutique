
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import "./index.css";



const Contact = () => {
    return (
      <>
      <Menu/>
      <div className="container-fluid" id="contact_banner">
            <h1>Contact us Now</h1>
            <p>We are trying Provides all kinds of good ReadyMade & Custom Dress</p>

        {/* top banner */}
        </div>
      <h1>CONTACT US</h1>
      <p>
      Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five 
      centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem 
      Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <Footer/>
  </>
      );
}
 
export default Contact;