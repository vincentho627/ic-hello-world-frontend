import React, { useState } from "react";
import $ from "jquery";
import Swal from "sweetalert2";

function UploadView() {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [lastSeenLocation, setLastSeenLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [imageShow, setImageShow] = useState("");

  async function uploadItem() {
    var name = $("#name")[0].value;
    var contactEmail = $("#contactEmail")[0].value;
    var contactNumber = $("#contactNumber")[0].value;
    var lastSeenLocation = $("#lastSeenLocation")[0].value;

    if (name == "" || contactEmail == "" || contactNumber == "" || lastSeenLocation == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't filled up your details!",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("lastSeenLocation", lastSeenLocation);
    formData.append("contactEmail", contactEmail);
    formData.append("contactNumber", contactNumber);
    formData.append("name", name);

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
      <h1>Upload your lost item</h1>
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
          type="text"
          name="contactEmail"
          id="contactEmail"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">What's your contact number?</label>
        <input
          type="text"
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
