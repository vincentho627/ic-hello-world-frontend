import React, { useState } from "react";


function Item(props) {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
      <p>
        <span className="font-weight-bold">Contact Email:</span>
        {props.contactEmail}
      </p>
      <p>
        <span className="font-weight-bold">Contact Number:</span>
        {props.contactNumber}
      </p>
      <p>{props.date}</p>
    </div>
  );
}

export default Item;
