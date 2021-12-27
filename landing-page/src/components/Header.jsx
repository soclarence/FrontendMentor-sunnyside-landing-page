import React from 'react'
import "./Main.css"
import arrow from "../images/icon-arrow-down.svg"


function Header(){
    return (
        <div className="container-fluid header row">
                <h1 className='header-txt'>WE ARE CREATIVES</h1>
                <img className="arrow-down" src={arrow} alt="Arrow down" />
            </div>
    )
}

export default Header;