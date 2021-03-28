import React, { useState } from "react";

function Item(props) {
  return (
    <div className="card p-3 color-white">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img
            className="card-img-top"
            src={`data:image/png;base64,${props.image}`}
            alt="Card image cap"
          ></img>
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-subtitle mb-2">{props.date}</p>
            <p className="card-text m-0">
              Last Seen Location:&nbsp;
              {/* <a href={"https://maps.google.com/q?=" + props.lastSeenLocation}>{props.lastSeenLocation}</a> */}
              {props.lastSeenLocation}
              <br />
              Contact Email:&nbsp;
              {props.contactEmail}
              <br />
              Contact Name:&nbsp;
              {props.contactNumber}
              <br />
              Details:&nbsp;
              {props.details}
              <br />
              Category:&nbsp;
              {props.lostOrFound}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
