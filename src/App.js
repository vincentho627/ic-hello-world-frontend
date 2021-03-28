import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import UploadView from "./views/UploadView";
import "./App.css";

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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
              WhereThe
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/upload">
                    Upload an Item
                  </a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="/signin">
                    {currUsername}
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0" method="GET" action="/search/">
                <input
                  class="form-control me-sm-2"
                  type="search"
                  placeholder="What are you looking for?"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
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
