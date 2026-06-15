"use client";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container navContainer">
        <a className="navbar-brand fw-bold" href="#">
          Steeve Jocelyn
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
   
    setOpen(!open);
  }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`mobileMenu ${open ? "open" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3">
             <a
  className="btn btn-dark"
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}