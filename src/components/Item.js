import React, { useState } from "react";


function Item(props) {
  return (
    <div>
      <h1>
        {props.item.name}
      </h1>
      <p>
        <span className="font-weight-bold">Contact Email:</span>
        {props.item.contactEmail}
      </p>
      <p>
        <span className="font-weight-bold">Contact Number:</span>
        {props.item.contactNumber}
      </p>
      <p>{props.item.date}</p>
    </div>
  );
}

export default Item;
