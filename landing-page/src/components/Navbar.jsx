import React from "react"
import logo from "../images/logo.svg"
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="container navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
                <img className="d-inline-block align-text-top" src={logo} alt="Sunnyside" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="home" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                    <a href="home" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                    <a href="home" className="nav-link">Testimonial</a>
                    </li>
                </ul>
                <button className="contact-btn">CONTACT</button>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;