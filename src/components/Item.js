import React, { useState } from "react";

function Item(props) {
  return (
    <div className="card mb-3 p-3">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/100"
            alt="Card image cap"
          ></img>
        </div>
        <div class="col-sm-8">
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.name}</h5>
            <p className="card-subtitle mb-2 text-muted">{props.date}</p>
            <p className="card-text m-0">
              <span className="font-weight-bold">Contact Email: </span>
              {props.contactEmail}
            </p>
            <p className="card-text">
              <span className="font-weight-bold">Contact Name: </span>
              {props.contactNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
