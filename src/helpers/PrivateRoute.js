import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  console.log(isLoggedIn);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
