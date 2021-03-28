import React from 'react';
import $ from 'jquery';
import Swal from 'sweetalert2';

function Navbar(props) {

  async function searchItems() {
    var keywords = $("#search-keywords")[0].value;
    // console.log(keywords);
    // let response = await fetch(`http://127.0.0.1:5000/search/${keywords}`);
    // console.log(response.json());
    if (keywords !== "") {
      window.location.pathname = `/search/${keywords}`;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cannot search with empty body",
      });
    }
  }


  return(
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        WhereThe
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/upload">
              Upload an Item
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="/signin">
              {props.currUsername}
            </a>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0" method="GET" action="/search/">
          <input
            id="search-keywords"
            class="form-control me-sm-2"
            type="search"
            placeholder="What are you looking for?"
          />
          <button
            class="btn btn-outline-light my-2 my-sm-0"
            type="submit"
            onClick={searchItems}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
