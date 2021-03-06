import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Customer from "./Customer";
import ManModel from "./customeDress/ManModel";
import Custom from "./Custom";

import PrivateRoute from "./Admin_view/PrivateRoute";
import Adminlogin from "./Admin_view/Adminlogin";
import RegisterScreen from "./Admin_view/RegisterScreen";
import ForgotPasswordScreen from "./Admin_view/ForgotPasswordScreen";
import ResetPasswordScreen from "./Admin_view/ResetPasswordScreen";
import AdminDashboard from "./Admin_view/AdminDashboard";
import Adminprofile from './Admin_view/Adminprofile';
import AdminUpdate from './Admin_view/AdminUpdate';

import TPrivateRoute from "./Tailor_view/TPrivateRoute";
import TailorLogin from "./Tailor_view/TailorLogin";
import TailorRegister from "./Tailor_view/TailorRegister";
import TailorForgotPassword from "./Tailor_view/TPassForgot";
import TailorPasswordReset from "./Tailor_view/TPReset";
import TailorDashboard from "./Tailor_view/TailorDashboard";
import LoggedTailorProfile from "./Tailor_view/LoggedTailorProfile";
import LoggedInTailorUpdate from "./Tailor_view/LoggedInTailorUpdate";


import Overview from './Order/Overview';
import  Reports from './Tailor_view/Reports';
import AllTailorMain_admin from './Tailor_view/AllTailorMain_admin';
import TailorProfile from './Tailor_view/TailorProfile';
import TailorUpdate from './Tailor_view/TailorUpdate';

import UprivateRoute from "./Users_view/UprivateRoute";
import UserRegister from "./Users_view/UserRegister";
import UserLogin from "./Users_view/UserLogin";
import UserDashboard from "./Users_view/UserDashboard";
import UserForgotPassword from "./Users_view/UserForgotPassword"
import Userpasswordreset from "./Users_view/Userpasswordreset";
import UserRegisterByAdmin from "./Users_view/UserRegisterByAdmin";
import AllUsers_admin from "./Users_view/AllUsers_admin";
import UserProfile from "./Users_view/UserProfile";
import UserUpdate from "./Users_view/UserUpdate";
import LoggedUserProfile from "./Users_view/LoggedUserProfile";

import AllUser_Tailor from "./Users_view/AllUser_Tailor";
import Userprofile_Tailor from "./Users_view/Userprofile_Tailor";
import UserProdileEdit_Tailor from "./Users_view/UserProdileEdit_Tailor";
import UserRegister_Tailor from "./Users_view/UserRegister_Tailor";
import LoggedUserProfileEdit from "./Users_view/LoggedUserProfileEdit";

import UploadProducts from './product/UploadProducts';
import AllProducttable_admin from './product/AllProducttable_admin';
import ProductDetail from './product/ProductDetail';
import Updateproduct from './product/UpdateProduct';

import UploadProduct_tailor from './product/UploadProduct_tailor';
import ProductTable_tailor from './product/ProductTable_tailor';
import ProductDetail_tailor from './product/ProductDetail_tailor';
import UpdateProduct_tailor from './product/UpdateProduct_tailor';

import ProductsPage  from "./ShopPage/ProductPage";
import ProductView from "./ShopPage/ProductView";
import Maleproducts from "./ShopPage/Maleproducts";
import FemaleProducts from "./ShopPage/FemaleProducts";

import AddOrder from "./Order/AddOrder";
import Allorders from "./Order/Allorders_admin";
import Orderdetail from "./Order/Orderdetail";
import EditOrder_Admin from "./Order/EditOrder_Admin";
import OrderByTailors from "./Order/OrdersByTailor";
import Vieworder_tailor from "./Order/Vieworder_tailor";
import Editorder_tailor from "./Order/Editorder_tailor";
import OrderDetail_User from "./Order/OrderDetail_User";
import Editorder_User from "./Order/Editorder_User";
import Tailordeatils_User from "./Tailor_view/Tailorlist_User";
import Tailordetails_User from "./Tailor_view/Tailordetails_User";
import GetRMorderbyuser from "./Order/GetRMorderbyuser";

import Addmeasurement from "./customeDress/Addmeasurement";
import MaleOrderGet_admin from "./customeDress/MaleOrderGet_admin";
import FemaleOrderGet_admin from "./customeDress/FemaleOrderGet_admin";
import MaleCustorderview_admin from "./customeDress/MaleCustorderview_admin";
import Getcustcorderbyuser from "./customeDress/Getcorderbyuser";
import OrderViewByuser from"./customeDress/OrderViewByuser";
import EditManModelbyUser from "./customeDress/EditMmondelbyUser";
import Measment_EditbyUser from "./customeDress/Measment_EditbyUser";
import MaleCustOrderby_tailor from "./customeDress/MaleCustOrderby_tailor";
import FemaleCustOrderby_tailor from "./customeDress/FemaleCustOrderby_tailor";
import Malecustorderviewby_Tailor from "./customeDress/Malecustorderviewby_Tailor";
import FemaleCustOrderviewby_tailor from "./customeDress/FemaleCustOrderviewby_tailor";

import Custom_maleDressOrder_User from "./customeDress/Custom_maleDressOrder_User"
import Custom_FemaleDressOrder_User from "./customeDress/Custom_FemaleDressOrder_User"

import FemaleModel from "./customeDress/FemaleModel"
import FemleCustorderview_admin from "./customeDress/FemleCustorderview_admin";
import FemaleCustom_view_User from "./customeDress/FemaleCustom_view_User";
import EditFMmodel_User from "./customeDress/EditFMmodel_User";

import Messenger from "./Message/Messenger";

import Join from "./ChatComponents/join/Join";
import Chat from "./ChatComponents/chat/Chat";

function App() {
  return (
    <>
      <Router>
        <div className="app_main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About"component={About}/>
            <Route exact path="/CustomDress" component={Custom}/>
            <PrivateRoute exact path="/Customer" component={Customer} />
            <Route exact path="/manmodel" component={ManModel} />
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
               <Route exact path="/tailorMain" component={AllTailorMain_admin} />
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
            <TPrivateRoute exact path="/tailor/dashboard" component={TailorDashboard}/>
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
            <UprivateRoute exact path="/user/dashboard" component={UserDashboard}/>
            <Route exact path="/Userpasswordreset/:resetToken" component={Userpasswordreset}/>
            <Route exact path="/User/RegisterByAdmin" component={UserRegisterByAdmin}/>
            <Route exact path="/User/UserMain" component={AllUsers_admin}/>
            <Route exact path="/user/Profile/:id" component={UserProfile}/>
            <Route exact path="/user/update/:id" component={UserUpdate}/>
            <Route exact path="/Loogeduser/Profile" component={LoggedUserProfile}/>
            <Route exact path="/LoogeduserProfile/Edit/:id" component={LoggedUserProfileEdit}/>
           
            <Route exact path="/tailor/User/UserMain" component={AllUser_Tailor}/>
            <Route exact path="/tailor/User/profile/:id" component={Userprofile_Tailor}/>
            <Route exact path="/user/updateprofile/:id" component={ UserProdileEdit_Tailor}/>
            <Route exact path="/tailor/adduser" component={UserRegister_Tailor}/>
          </Switch>

          <Switch>
            <Route exact path="/uploadproduct" component={UploadProducts}/>
            <Route exact path="/product/allProducttable" component={AllProducttable_admin}/>
            <Route exact path="/product/detail/:id" component={ProductDetail}/>
            <Route exact path="/product/Update/:id" component={Updateproduct}/>
          </Switch>

          <Switch>
            <Route exact path="/UploadProduct_tailor" component={UploadProduct_tailor}/>
            <Route exact path="/ProductTable_tailor" component={ProductTable_tailor}/>
            <Route exact path="/ProductDetail_tailor/:id" component={ProductDetail_tailor}/>
            <Route exact path="/UpdateProduct_tailor/:id" component={UpdateProduct_tailor}/>
            
          </Switch>
          {/* User CRUD By Tailor */}
         <Switch>
              <Route exact path="/product" component={ProductsPage}/>
              <Route exact path="/product/Details/:id" component={ProductView}/>
              <Route exact path="/product/femaleproducts" component={FemaleProducts}/>
              <Route exact path="/product/maleproducts" component={Maleproducts}/>
              
         </Switch>



        <Switch>
          <Route exact path="/orderNow/:id" component={AddOrder}/>
          <Route exact path="/allorders" component={Allorders}/>
          <Route exact path="/orderdetail/:id" component={Orderdetail}/>
          <Route exact path="/EditOrderAdmin/:id" component={EditOrder_Admin}/>
          <Route exact path="/tailororderbygender" component={OrderByTailors }/>
          <Route exact path ="/Viewordertailor/:id" component={Vieworder_tailor}/>
          <Route exact path ="/Editordertailor/:id" component={Editorder_tailor}/>
          <Route exact path ="/OrderDetailUser/:id" component={OrderDetail_User}/>
          <Route exact path ="/EditorderUser/:id" component={Editorder_User}/>
          <Route exact path ="/users/All/Tailor" component={Tailordeatils_User}/>
          <Route exact path ="/users/TailorDetailss/:id" component={Tailordetails_User}/>
          <Route exact path ="/users/GetRMorderbyuser" component={GetRMorderbyuser}/>
        </Switch>



        <Switch>
          <Route exact path="/addmeasurement/:id" component={Addmeasurement}/>
          <Route exact path="/customdress/orders" component={MaleOrderGet_admin}/>
          <Route exact path="/Femalecustomdress/orders" component={FemaleOrderGet_admin}/>
          <Route exact path="/customdress/view/:id" component={MaleCustorderview_admin}/>
          <Route exact path="/customdress/allorderbyuser" component={Getcustcorderbyuser}/>
          <Route exact path="/customized/orderbyuser/:id" component={OrderViewByuser}/>
          <Route exact path="/customized/editManModelbyUser/:id" component={EditManModelbyUser}/>
          <Route exact path="/customized/Measment_EditbyUser/:id" component={Measment_EditbyUser}/>
          <Route exact path="/custom/MaleorderByTailor" component={MaleCustOrderby_tailor}/>
          <Route exact path="/custom/FemaleorderByTailor" component={FemaleCustOrderby_tailor}/>
          <Route exact path="/custom/malecustorderTailor/:id" component={Malecustorderviewby_Tailor}/>
          <Route exact path="/custom/FemalecustorderTailor/:id" component={FemaleCustOrderviewby_tailor}/>
         
          


          <Route exact path="/custom/CustommaleDressOrder" component={Custom_maleDressOrder_User}/>
          <Route exact path="/custom/CustomFemaleDressOrder" component={Custom_FemaleDressOrder_User}/>
          

          <Route exact path="/custom/Femalemodel" component={FemaleModel}/>
          <Route exact path="/custom/FemleCustorderviewadmin/:id" component={FemleCustorderview_admin}/>
          <Route exact path="/custom/FemaleCustomviewUser/:id" component={FemaleCustom_view_User}/>
          <Route exact path="/custom/EditFMmodel_User/:id" component={EditFMmodel_User}/>
        </Switch>


          <Switch>
            <Route exact path="/Customer">

              <Customer />
            </Route>
            <Route exact path="/message/messager" component={Messenger}/>
            <Route exact path="/join" component={Join}/>
            <Route exact path="/chat" component={Chat}/>


          </Switch>

          
          
        </div>
      </Router>

     
    </>
  );
}

export default App;
