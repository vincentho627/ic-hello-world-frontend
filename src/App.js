import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import UploadView from "./views/UploadView";

function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>WhereThe</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <ItemListView />
            </Route>
            <Route path="/upload">
              <UploadView />
            </Route>
            <Route path="/signup">
              <SignUpView />
            </Route>
            <Route path="/signin">
              <SignInView />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
