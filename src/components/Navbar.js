import React from 'react'

function Navbar({ setCurrentPage }) {
  return (
    <div class=" bg-dark  sticky-top">
      <nav
        class="navbar navbar-expand-lg rounded-3 m-2 border border-3"
        id="navbar"
      >
        <div class="container-fluid">
          <a class="text-white navbar-brand" href="#">
            Kaelin Salazar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
              <li class="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("Biography");
                  }}
                  class=" text-white nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Biography
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("Projects");
                  }}
                  class="text-white nav-link active"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li class="nav-item active">
                <a
                  onClick={() => {
                    setCurrentPage("Contact");
                  }}
                  class=" text-white nav-link active"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li class="nav-item active">
                <a
                  onClick={() => {
                    setCurrentPage("Resume");
                  }}
                  class="text-white nav-link active"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar