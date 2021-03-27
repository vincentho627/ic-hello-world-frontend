import React, { useState } from "react";
import $ from "jquery";

function UploadView() {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState("");

function uploadItem() {
  
}

  return (
    <div>
      <h1>Upload your item</h1>
      <div class="form-group">
          <label for="name">What's the name of your item?</label>
          <input type="text" name="name" id="name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="contactEmail">What's your contact email?</label>
          <input
            type="text"
            name="contactEmail"
            id="contactEmail"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="contactNumber">What's your contact number?</label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            class="form-control"
          />
        </div>
        <button onClick={uploadItem} class="btn btn-primary">FUCK SAKE</button>
    </div>
  );
}

export default UploadView;
