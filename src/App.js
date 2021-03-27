import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import UploadView from "./views/UploadView";

function App() {
  return (
    <div class="container">
      <div class="page-header">
        <h1>WhereThe</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <ItemListView />
            </Route>
            <Route path="/upload">
              <UploadView />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
