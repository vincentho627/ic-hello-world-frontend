import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import UploadView from "./views/UploadView";

function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h2 className="border-bottom p-3 mb-5">WhereThe</h2>
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
