import ROUTES from "./Routes";
import {Route, Switch} from "react-router";

const Navigation = () => {
  return (
    <Switch>
      {ROUTES.PUBLIC.map((routes) => (
        <Route
          exact={routes.EXACT}
          key={routes.NAME}
          path={routes.PATH}
          component={routes.COMPONENT}
        />
      ))}
    </Switch>
  );
};

export default Navigation;
