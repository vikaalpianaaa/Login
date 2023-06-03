import {HomePage, NotFoundPage, LoginPage, DashboardPage} from "pages";

const ROUTES = {
  PUBLIC: [
    {PATH: "/", NAME: "Home", COMPONENT: HomePage, EXACT: true},
    {
      PATH: "/dashboard",
      NAME: "Dashboard",
      COMPONENT: DashboardPage,
      EXACT: false,
    },
    {
      PATH: "/login",
      NAME: "Login",
      COMPONENT: LoginPage,
      EXACT: false,
    },
    {
      PATH: "*",
      NAME: "NotFound",
      COMPONENT: NotFoundPage,
      EXACT: false,
    },
  ],
};

export default ROUTES;
