import { Redirect, Route } from "react-router-dom";
const UprivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest} render = {(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/user/login"/>
        )
      }
    />
  );
};

 
export default UprivateRoute;