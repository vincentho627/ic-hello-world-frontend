import React, { useState } from "react";
import $ from "jquery";
import Swal from "sweetalert2";

function SignUpView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function createUser() {
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

    let response = await fetch(`http://127.0.0.1:5000/signup`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      var json_data = await response.json();
      if (json_data.success) {
        $("#username")[0].value = "";
        $("#password")[0].value = "";
        await Swal.fire({
          icon: "success",
          title: "Welcome to WhereThe!",
          text: "Happy surfing!",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  }

  return (
    <div className="signup-box">
      <h1>Create your account</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          className="form-control"
          required
        />
      </div>
      
      <button onClick={createUser} className="btn btn-outline-light">
        Sign Up
      </button>
    </div>
  );
}

export default SignUpView;
