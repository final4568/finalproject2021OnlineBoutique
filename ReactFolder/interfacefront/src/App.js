import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import About from "./About";
import Custom from "./Custom";
import Customer from "./Customer";

import PrivateRoute from "./Admin_view/PrivateRoute";
import Adminlogin from "./Admin_view/Adminlogin";
import RegisterScreen from "./Admin_view/RegisterScreen";
import ForgotPasswordScreen from "./Admin_view/ForgotPasswordScreen";
import ResetPasswordScreen from "./Admin_view/ResetPasswordScreen";
import AdminDashboard from "./Admin_view/AdminDashboard";

import TailorLogin from "./Tailor_view/TailorLogin";
import TailorRegister from "./Tailor_view/TailorRegister";
import TailorForgotPassword from "./Tailor_view/TPassForgot";
import TailorPasswordReset from "./Tailor_view/TPReset";
import TailorPrivateScreen from "./Tailor_view/TprivateScreen";

import Overview from './Tailor_view/Overview';
import  Reports from './Tailor_view/Reports';
import TailorMainpage from './Tailor_view/TailorMain';
import TailorProfile from './Tailor_view/TailorProfile';
import TailorUpdate from './Tailor_view/TailorUpdate';

import Adminprofile from './Admin_view/Adminprofile';
import AdminUpdate from './Admin_view/AdminUpdate';

function App() {
  return (
    <>
      <Router>
        <div className="app_main">
         
          <Switch>
            <Route exact path="/"><Home /> </Route>
          </Switch>
          <Switch>
            <Route exact  path="/Contact"><Contact /></Route>
          </Switch>

          <Switch>
            <Route exact path="/shop"><Shop /></Route>
          </Switch>

          <Switch>
            <Route exact path="/About"> <About /> </Route>
          </Switch>

          <Switch>
            <Route  exact path="/CustomDress"><Custom /></Route>
          </Switch>

            {/* Admin login pages routes */}
          <Switch>
            <Route exact path="/admin/login" component={Adminlogin} />
            <Route exact path="/admin/register" component={RegisterScreen} />
            <Route exact path="/admin/forgetpassword"component={ForgotPasswordScreen}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
            <PrivateRoute exact path="/admin" component={AdminDashboard} />
            <Route exact path="/adminprofile" component={Adminprofile} />
            <Route exact path="/adminupdate/:id" component={AdminUpdate} />
          </Switch>

          {/* Admin SideBar Routes */}
          <Switch>
               <Route exact path="/report" component={Reports} />
               <Route exact path="/overview" component={Overview} />              
               <Route exact path="/tailorMain" component={TailorMainpage} />
               <Route exact path="/tailor/registerbyadmin" component={TailorRegister} />
               <Route exact path="/TailorProfile/:id" component={TailorProfile} />
               <Route exact path="/TailorUpdate/:id" component={TailorUpdate} />
               <Route exact path="/TailorUpdate/:id" component={TailorUpdate} />
          </Switch>

          {/* Tailor Login/Resiger Pages Routes */}
          <Switch>
          <Route exact path="/tailor/login" component={TailorLogin} />
            <Route exact path="/tailor/forgetpassword" component={TailorForgotPassword}/>
            <Route exact path="/tailorpasswordreset/:resetToken" component={TailorPasswordReset}/>
              <Route exact path="/tailor" component={TailorPrivateScreen}/>
          </Switch>
      
          <Switch>
            <Route exact path="/Customer">
              <Customer />
            </Route>
          </Switch>

          
          
        </div>
      </Router>

     
    </>
  );
}

export default App;
