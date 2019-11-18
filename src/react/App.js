import React from "react";
import { Switch, Route } from "./components";
import pages from "./pages";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

class App extends React.Component {
  render() {
    return (
      <Switch>
        {Object.entries(pages).map(([routeName, routeObj]) => (
          <Route
            key={routeName}
            exact
            path={routeObj.path}
            component={routeObj.component}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
