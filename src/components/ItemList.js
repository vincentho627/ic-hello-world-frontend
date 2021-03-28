import React, { useState, useEffect } from "react";
import Item from "./Item";
import Swal from "sweetalert2";


function ItemList(props) {
  const [items, setItems] = useState([]);
  const [pageID, setPageID] = useState(1);
  const [lostOrFoundPage, setLostOrFoundPage] = useState(true);
  const [choiceButtonOne, setchoiceButtonOne] = useState('page-item active');
  const [choiceButtonTwo, setchoiceButtonTwo] = useState('page-item');


  const getItems = async () => {
    var response;

    if (props.search !== null) {
      response = await fetch(`http://127.0.0.1:5000/search/${props.search}`);
    } else {
      if (lostOrFoundPage) {
        response = await fetch(`http://127.0.0.1:5000/lost-items/${pageID}`);
      } else {
        response = await fetch(`http://127.0.0.1:5000/found-items/${pageID}`);
      }
    }

    if (response.ok) {
      var res = await response.json();
      if (res.success) {

        var resItems = await res.items;

        setItems(resItems);

        if (props.search !== null) {
          if (resItems.length == 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No results found",
            });
            return;
          }
        }
      }
    }
  };

  function previousPage() {
    setPageID(pageID - 1);
  }

  function nextPage() {
    setPageID(pageID + 1);
  }

  useEffect(getItems, [pageID, lostOrFoundPage]);

  var previousPageButton = "page-item";

  if (pageID - 1 <= 0) {
    previousPageButton += " disabled";
  }

  function clickChoiceButtonOne() {
    setLostOrFoundPage(true);
    setchoiceButtonOne(choiceButtonOne + " active");
    setchoiceButtonTwo("page-item");
  }

  function clickChoiceButtonTwo() {
    setLostOrFoundPage(false);
    setchoiceButtonTwo(choiceButtonTwo + " active");
    setchoiceButtonOne("page-item");
  }

  var choice = null;
  if (props.search === null) {
    choice = <nav aria-label="Lost or found navigation">
      <ul className="pagination justify-content-center">
        <li className={choiceButtonOne}>
          <a className="page-link" onClick={clickChoiceButtonOne}>
            Lost Items
          </a>
        </li>
        <li className={choiceButtonTwo}>
          <a className="page-link" onClick={clickChoiceButtonTwo}>
            Found Items
          </a>
        </li>
      </ul>
    </nav>;
  }

  var pageNav = null;
  if (props.search === null) {
    pageNav = <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={previousPageButton}>
          <a className="page-link" onClick={previousPage}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  }

  return (
    <div>
      {choice}
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            date={item.date}
            lastSeenLocation={item.lastSeenLocation}
            contactEmail={item.contactEmail}
            contactNumber={item.contactNumber}
            image={item.image}
            details={item.details}
            lostOrFound={item.lostOrFound}
          />
        );
      })}
      {pageNav}

    </div>
  );
}

export default ItemList;
