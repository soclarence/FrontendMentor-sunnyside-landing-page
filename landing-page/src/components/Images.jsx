import React from "react"
import "./Main.css"

function Images(){
    return(
        <div className="img-container">
            <div className="row 
            row-cols-sm-2
            row-cols-md-2
            row-cols-lg-2
            row-cols-xl-4
            row-cols-xxl-4">
                <div className="col-6">
                    <img className='image-area' src={require("../images/desktop/image-gallery-milkbottles.jpg")}   alt="transform your brand" />
                </div>
                <div className="col-6">
                    <img className='image-area' src={require("../images/desktop/image-gallery-orange.jpg")}   alt="transform your brand" />
                </div>
                <div className="col-6">
                    <img className='image-area' src={require("../images/desktop/image-gallery-cone.jpg")}   alt="transform your brand" />
                </div>
                <div className="col-6">
                    <img className='image-area' src={require("../images/desktop/image-gallery-sugarcubes.jpg")}   alt="transform your brand" />
                </div>
            </div>
        </div>
    )
}

export default Images;