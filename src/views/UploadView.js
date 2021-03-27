import React, {useState} from "react";
import $ from "jquery";
import Swal from 'sweetalert2';

function UploadView() {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState("");

  async function uploadItem() {
    var name = $("#name")[0].value;
    var contactEmail = $("#contactEmail")[0].value;
    var contactNumber = $("#contactNumber")[0].value;

    let response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: JSON.stringify({"contactEmail": contactEmail, "contactNumber": contactNumber, "name": name}),
      headers: new Headers({"content-type": "application/json"})
    });

    console.log(response);

    if (response.ok) {
      var json_data = await response.json();
      console.log(json_data);
      if (json_data.success) {
        $("#name")[0].value = "";
        $("#contactEmail")[0].value = "";
        $("#contactNumber")[0].value = "";
        await Swal.fire({icon: 'success', title: 'Uploaded', text: 'Hope the item finds its owner!'});
      } else {
        await Swal.fire({icon: 'error', title: 'Oops...', text: 'Something went wrong!'});
      }
    }

  }

  return (<div>
    <h1>Upload your item</h1>
    <div className="form-group">
      <label htmlFor="name">What's the name of your item?</label>
      <input type="text" name="name" id="name" className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="contactEmail">What's your contact email?</label>
      <input type="text" name="contactEmail" id="contactEmail" className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="contactNumber">What's your contact number?</label>
      <input type="text" name="contactNumber" id="contactNumber" className="form-control"/>
    </div>
    <button onClick={uploadItem} className="btn btn-primary">FUCK SAKE</button>
  </div>);
}

export default UploadView;
