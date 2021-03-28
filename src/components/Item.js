import React, { useState } from "react";

function Item(props) {
  return (
    <div className="card p-3">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/100"
            alt="Card image cap"
          ></img>
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-subtitle mb-2">{props.date}</p>
            <p className="card-text m-0">
              Last Seen Location:&nbsp;
              <a href={"https://maps.google.com/q?=" + props.lastSeenLocation}>{props.lastSeenLocation}</a>
              <br />
              Contact Email:&nbsp;
              {props.contactEmail}
              <br />
              Contact Name:&nbsp;
              {props.contactNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
