import React from 'react'
import "./Main.css"
import Testimonials from "./Testimonials"

function Clients(){
    return(
        <div className='container client-area'>
            <div className="container-fluid client-container">
                <h1 className='client-head'>CLIENT TESTIMONIALS</h1>
                <div className="row
                row-cols-sm-1
                row-cols-md-1
                row-cols-lg-3
                row-cols-xl-3
                row-cols-xxl-3">
                    <Testimonials 
                    img={require("../images/image-emily.jpg")}
                    testimony="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name="Emily R."
                    title="Marketing Director"
                    />

                    <Testimonials 
                    img={require("../images/image-thomas.jpg")}
                    testimony="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                    name="Thomas S."
                    title="Chief Operating Officer"
                    />

                    <Testimonials 
                    img={require("../images/image-jennie.jpg")}
                    testimony="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    title="Business Owner"
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients;