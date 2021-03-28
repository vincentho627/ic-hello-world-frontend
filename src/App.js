import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import UploadView from "./views/UploadView";
import './App.css';

function App() {
  const [currUsername, setCurrUsername] = useState("");

  const getCurrUsername = async () => {
    let response = await fetch(`http://127.0.0.1:5000/`);
    if (response.ok) {
      var json_data = await response.json();
      setCurrUsername(json_data.currUsername);
    }
  };

  useEffect(getCurrUsername, []);

  return (
    <div className="container">
      <div className="page-header">
        <Router>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/upload">
                    Upload an Item
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto" href="/">
                WhereThe
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    {currUsername}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

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
