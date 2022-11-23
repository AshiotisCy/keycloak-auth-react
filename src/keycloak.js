import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  url: "http://localhost:8080/",
  realm: "keycloak-react-auth",
  clientId: "React-auth",
});

export default _kc;
