import React from 'react'
import "./Main.css"
import Header from "./Header"
import Services from "./Services"
import Clients from "./Clients"
import Images from "./Images"


function Main() {
    return(
        <div>
            <Header />
            <Services />
            <Clients />
            <Images />
        </div>
    )
}

export default Main;