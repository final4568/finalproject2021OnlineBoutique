


import { Redirect, Route } from "react-router-dom";
const TPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest} render = {(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/tailor/login" />
        )
      }
    />
  );
};

 
export default TPrivateRoute;