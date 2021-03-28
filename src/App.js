import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemListView from "./views/ItemListView";
import SearchListView from "./views/SearchListView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import UploadView from "./views/UploadView";
import "./App.css";
import $ from 'jquery';
import Navbar from './components/Navbar';

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
    <div>
      <Navbar currUsername={currUsername} />
      <div className="container">
        <div className="page-header">
          <Router>
            <Switch>
              <Route exact path="/">
                <ItemListView />
              </Route>
              <Route path="/upload">
                <UploadView />
              </Route>
              <Route path="/search/:items" children={<SearchListView />}>
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
    </div>

  );
}

export default App;
