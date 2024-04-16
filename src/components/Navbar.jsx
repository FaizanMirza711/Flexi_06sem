import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {" "}
      {/* Change bg-light for off-white color */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Student Data Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <form className="d-flex ms-auto" role="search">
            {" "}
            {/* Use ms-auto to move the search form to the end */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              {" "}
              {/* Change btn-outline-dark to match your desired button style */}
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
