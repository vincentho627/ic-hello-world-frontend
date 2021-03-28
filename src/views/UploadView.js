import React, { useState } from "react";
import $ from "jquery";
import Swal from "sweetalert2";
import TextareaAutosize from 'react-textarea-autosize';

function UploadView() {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [lastSeenLocation, setLastSeenLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [imageShow, setImageShow] = useState("");

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateNumber(number) {
    const re = /^\d+$/;
    return re.test(String(number).toLowerCase());
  }

  async function uploadItem() {
    var name = $("#name")[0].value;
    var contactEmail = $("#contactEmail")[0].value;
    var contactNumber = $("#contactNumber")[0].value;
    var lastSeenLocation = $("#lastSeenLocation")[0].value;
    var details = $("#details")[0].value;
    var radios = $("input[name='lostorfound']");

    if (name == "" || contactEmail == "" || contactNumber == "" || lastSeenLocation == "" || details == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't filled up your details!",
      });
      return;
    }

    if (!validateEmail(contactEmail)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't entered a valid email",
      });
      return;
    }

    if (!validateNumber(contactNumber)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't entered a valid contact number",
      });
      return;
    }


    var ifOneChecked = false;
    var option;
    for (const radio of radios) {
      if (radio.checked) {
        option = radio.value;
        ifOneChecked = true;
      }
    }

    if (!ifOneChecked) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't selected an option",
      });
      return;
    }

    if (image.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't uploaded an image",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("lastSeenLocation", lastSeenLocation);
    formData.append("contactEmail", contactEmail);
    formData.append("contactNumber", contactNumber);
    formData.append("name", name);
    formData.append("details", details);
    formData.append("lostOrFound", option);


    let response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    console.log(response);

    if (response.ok) {
      var json_data = await response.json();
      console.log(json_data);
      if (json_data.success) {
        $("#name")[0].value = "";
        $("#contactEmail")[0].value = "";
        $("#contactNumber")[0].value = "";
        $("#lastSeenLocation")[0].value = "";
        setImageShow("");
        setImage("");
        await Swal.fire({
          icon: "success",
          title: "Uploaded",
          text: "Hope the item finds its owner!",
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

  function upload(e) {
    setImage(e.target.files);
    if (e.target.files.length != 0) {
      setImageShow(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="upload-box">
      <h1>Upload an item</h1>
      <div className="form-group">
        <label htmlFor="name">What's the name of your item?</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactEmail">What's your contact email?</label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">What's your contact number?</label>
        <input
          type="tel"
          name="contactNumber"
          id="contactNumber"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastSeenLocation">Where did you find this item?</label>
        <input
          type="text"
          name="lastSeenLocation"
          id="lastSeenLocation"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastSeenLocation">Details</label>
        <br />
        <TextareaAutosize id="details" className="input form-control" maxRows="6" minRows="4" placeholder="Write a comment..."/>
      </div>
      <div className="form-group">
        <p>Please select one of the following options:</p>
        <input type="radio" id="lost" name="lostorfound" value="lost"/>
        <label htmlFor="lost">Lost this item?</label>
        <input type="radio" id="found" name="lostorfound" value="found"/>
        <label htmlFor="found">Found this item?</label>
      </div>
      <div className="form-group">
        <label htmlfor="image">Upload an image</label>
        <input
          type="file"
          className="form-control-file"
          name="file"
          id="image"
          accept="image/*"
          onChange={(e) => upload(e)}
        />
      </div>
      <button onClick={uploadItem} className="btn btn-outline-light">
        Post
      </button>
    </div>
  );
}

export default UploadView;
