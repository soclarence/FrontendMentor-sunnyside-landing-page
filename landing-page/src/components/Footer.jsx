import React from "react"
import logo from "../images/logo.svg"
import Attribution from "./Attribution"
import "./Main.css"
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import pinterest from "../images/icon-pinterest.svg"
import twitter from "../images/icon-twitter.svg"

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <img className="footer-logo" src={logo} alt="Sunnyside" />
                <div className="row footer-menu">
                    <div className="col"><a href="home">About</a></div>
                    <div className="col"><a href="home">Service</a></div>
                    <div className="col"><a href="home">Project</a></div>
                </div>
            </div>
            <div className="row social-media">
                <div className="col">
                    <img className="footer-logo" src={facebook} alt="Sunnyside" />
                </div>
                <div className="col">
                    <img className="footer-logo" src={instagram} alt="Sunnyside" />
                </div>
                <div className="col">
                    <img className="footer-logo" src={twitter} alt="Sunnyside" />
                </div>
                <div className="col">
                    <img className="footer-logo" src={pinterest} alt="Sunnyside" />
                </div>
            </div>
            <Attribution />
        </footer>
    )
}

export default Footer;