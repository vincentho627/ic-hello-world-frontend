import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import Swal from "sweetalert2";

function SignInView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  async function signInUser() {
    var username = $("#username")[0].value;
    var password = $("#password")[0].value;

    if (username == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't filled up your details!",
      });
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    let response = await fetch(`http://127.0.0.1:5000/signin`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      var json_data = await response.json();
      if (json_data.success) {
        redirect();
        await Swal.fire({
          icon: "success",
          title: "Welcome back to WhereThe!",
          text: "Happy hunting!",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: json_data.error,
        });
      }
    }
  }

  return (
    <div>
      <h1>Sign into your account</h1>
      <div className="form-group">
        <label htmlFor="username">Set a username: </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Set a password: </label>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control"
          required
        />
      </div>
      <button onClick={signInUser} className="btn btn-primary">
        Sign In
      </button>
      <a className="nav-item" href="/signup">
        Don't have an account? Sign up for one!
      </a>
    </div>
  );
}

export default SignInView;
