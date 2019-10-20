// import React Stuff
import React from "react";
import { Switch, Route } from "react-router-dom";
// CSS Stuff
import "./App.css";
// import Index and Search component
import Search from "./components/Query";
import Library from "./components/Library";
// import Context State Provider
import Context, { UserContext } from "./Context/CTX";



const App = () => {
  return (
    <div className="app">
      <Context>
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <UserContext.Consumer>
                {context => <Library {...context} />}
              </UserContext.Consumer>
            )}
          />
          <Route
            exact
            path={"/search"}
            render={() => (
              <UserContext.Consumer>
                {context => <Search {...context} />}
              </UserContext.Consumer>
            )}
          />
        </Switch>
      </Context>
    </div>
  );
};

export default App;
