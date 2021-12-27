import React from 'react'
import "./Main.css"

function Testimonials(props){
    return(
        <div className="col-12 testimony">
            <img className='client-image'
            src={props.img}
            alt="client" />
            <p>{props.testimony}</p>
            <h2 className='client-name'>{props.name}</h2>
            <p className="client-title">{props.title}</p>
        </div>
    )

}

export default Testimonials;