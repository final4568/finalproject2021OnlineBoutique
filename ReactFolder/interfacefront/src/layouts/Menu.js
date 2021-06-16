import '../index.css';
import { Link, NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <>
        <div className="container-fluid" id="Menu" >   
            <div className="row" id="navigavtion">
                <div className="col-left">
                <div className="menu">              
                <nav>
                    <input type="checkbox" id="check"/>
                    <label for="check" class="checkbtn">
                    <i className="fas fa-bars"></i>
                    </label>
                    <Link to="/">
                    <label for="" className="logo">Online Boutique</label>
                    </Link>  
                                      
                    <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/shop">Shop</NavLink></li>
                    <li><NavLink exact to="/About">About</NavLink></li>
                    <li><NavLink exact to="/Contact">Contact</NavLink></li>
                    <li><NavLink exact to="/CustomDress">Custom Dress</NavLink></li>                    
                    </ul>
                 </nav>               
                </div>

                </div>
                <div className="col-right" id="dropdown">
                    <div className="dropdown">
                    <button className="dropbtn">Login</button>
                    <div className="dropdown-content">
                    <NavLink to="/admin">Admin</NavLink>
                    <NavLink to="/tailor">Tailor</NavLink>
                    <NavLink to="/customer">Customer</NavLink>
                    </div>
                    </div>
                </div>
            </div>             
                
        </div>               

           
        
        
        </>
      );
}

export default Menu;
