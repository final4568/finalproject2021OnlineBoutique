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
import Adminprofile from './Admin_view/Adminprofile';
import AdminUpdate from './Admin_view/AdminUpdate';

import TailorLogin from "./Tailor_view/TailorLogin";
import TailorRegister from "./Tailor_view/TailorRegister";
import TailorForgotPassword from "./Tailor_view/TPassForgot";
import TailorPasswordReset from "./Tailor_view/TPReset";
import TailorDashboard from "./Tailor_view/TailorDashboard";
import LoggedTailorProfile from "./Tailor_view/LoggedTailorProfile";
import LoggedInTailorUpdate from "./Tailor_view/LoggedInTailorUpdate";


import Overview from './Tailor_view/Overview';
import  Reports from './Tailor_view/Reports';
import TailorMainpage from './Tailor_view/TailorMain';
import TailorProfile from './Tailor_view/TailorProfile';
import TailorUpdate from './Tailor_view/TailorUpdate';

import UserRegister from "./Users_view/UserRegister";
import UserLogin from "./Users_view/UserLogin";
import UserDashboards from "./Users_view/UserDashboard";
import UserForgotPassword from "./Users_view/UserForgotPassword"
import Userpasswordreset from "./Users_view/Userpasswordreset";
import UserRegisterByAdmin from "./Users_view/UserRegisterByAdmin";
import UserMain from "./Users_view/UsersMain";
import UserProfile from "./Users_view/UserProfile";
import UserUpdate from "./Users_view/UserUpdate";
import LoggedUserProfile from "./Users_view/LoggedUserProfile";

import UserMain_Tailor from "./Users_view/UserMain_Tailor";
import Userprofile_Tailor from "./Users_view/Userprofile_Tailor";
import UserProdileEdit_Tailor from "./Users_view/UserProdileEdit_Tailor";
import UserRegister_Tailor from "./Users_view/UserRegister_Tailor";
import LoggedUserProfileEdit from "./Users_view/LoggedUserProfileEdit";

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
            <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
            <Route exact path="/admin/profile" component={Adminprofile} />
            <Route exact path="/admin/update/:id" component={AdminUpdate} />
          </Switch>

          {/* Admin SideBar Routes */}
          <Switch>
               <Route exact path="/report" component={Reports} />
               <Route exact path="/overview" component={Overview} />              
               <Route exact path="/tailorMain" component={TailorMainpage} />
               <Route exact path="/tailor/registerbyadmin" component={TailorRegister} />
               <Route exact path="/Tailor/Profile/:id" component={TailorProfile} />
               <Route exact path="/Tailor/Update/:id" component={TailorUpdate} />
               {/* <Route exact path="/TailorUpdate/:id" component={TailorUpdate} /> */}
          </Switch>

          {/* Tailor Login/Resiger Pages Routes */}
          <Switch>
          <Route exact path="/tailor/login" component={TailorLogin} />
            <Route exact path="/tailor/forgetpassword" component={TailorForgotPassword}/>
            <Route exact path="/tailorpasswordreset/:resetToken" component={TailorPasswordReset}/>
            <Route exact path="/tailor/dashboard" component={TailorDashboard}/>
          </Switch>

      {/* Tailor SideBar Routes */}
          <Switch>
              <Route exact path ="/LoggedTailor/Profile" component={LoggedTailorProfile}/>
              <Route exact path ="/LoggedInTailor/Update/:id" component={LoggedInTailorUpdate}/>
          </Switch>

          
          {/* User Routes*/}
          <Switch>
            <Route exact path ="/user/register" component={UserRegister}/>
            <Route exact path ="/user/login" component={UserLogin}/>
            <Route exact path ="/user/UserForgotPassword" component={UserForgotPassword}/>
            <Route exact path="/user/dashboard" component={ UserDashboards }/>
            <Route exact path="/Userpasswordreset/:resetToken" component={Userpasswordreset}/>
            <Route exact path="/User/RegisterByAdmin" component={UserRegisterByAdmin}/>
            <Route exact path="/User/UserMain" component={UserMain}/>
            <Route exact path="/user/Profile/:id" component={UserProfile}/>
            <Route exact path="/user/update/:id" component={UserUpdate}/>
            <Route exact path="/Loogeduser/Profile" component={LoggedUserProfile}/>
            <Route exact path="/LoogeduserProfile/Edit/:id" component={LoggedUserProfileEdit}/>
           


            <Route exact path="/tailor/User/UserMain" component={UserMain_Tailor}/>
            <Route exact path="/tailor/User/profile/:id" component={Userprofile_Tailor}/>
            <Route exact path="/user/updateprofile/:id" component={ UserProdileEdit_Tailor}/>
            <Route exact path="/tailor/adduser" component={UserRegister_Tailor}/>
           
          
           
          </Switch>


          {/* User CRUD By Tailor */}
         

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
