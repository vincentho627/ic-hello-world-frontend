import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList(props) {
  const [items, setItems] = useState([]);
  const [pageID, setPageID] = useState(1);

  const getItems = async () => {
    let response = await fetch(`http://127.0.0.1:5000/items/${pageID}`);
    console.log(response);
    if (response.ok) {
      var res = await response.json();
      console.log(res);
      var resItems = await res.items;

      console.log(resItems);
      setItems(resItems);
    }
  };

  function previousPage() {
    setPageID(pageID - 1);
  }

  function nextPage() {
    setPageID(pageID + 1);
  }

  useEffect(getItems, [pageID]);

  var previousPageButton = "page-item";

  if (pageID - 1 <= 0) {
    previousPageButton += " disabled";
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <Item
            id={item.id}
            name={item.name}
            date={item.date}
            contactEmail={item.contactEmail}
            contactNumber={item.contactNumber}
          />
        );
      })}

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class={previousPageButton}>
            <a class="page-link" onClick={previousPage}>
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ItemList;
