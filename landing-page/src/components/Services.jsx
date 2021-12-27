import React from 'react'
import "./Main.css"

function Services() {
    return(
        <div className=''>
            <div className='row parent-div
            row-cols-12-sm-1
            row-cols-12-md-1
            row-cols-12-lg-2
            row-cols-xl-2
            row-cols-xxl-2'>
                <div className="right-column col-12">
                    <h1 className='heading-text'>Transform your brand</h1>
                    <p className='body-txt'>We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <button className='info-btn'>Learn More</button>
                </div>
                <div className="image-col col-12">
                    <img className='image' src={require("../images/desktop/image-transform.jpg")} alt="transform your brand" />
                </div>
            </div>

            {/* 3nd container */}

            <div className=' row flex-column-reverse flex-xl-row parent-div
            row-cols-12-sm-1 
            row-cols-12-md-1 
            row-cols-12-lg-1 
            row-cols-xl-2
            row-cols-xxl-2'>
                <div className="image-col col-md-12">
                    <img className='image' src={require("../images/desktop/image-stand-out.jpg")} alt="transform your brand" />
                </div>
                <div className="right-column col-md-12">
                    <h1 className='heading-text'>Stand out to the right audience</h1>
                    <p className='body-txt'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </p>
                    <button className='info-btn'>Learn More</button>
                </div>
            </div>

            {/* 3nd container ends here */}

             {/* 4th container starts here */}

            <div className="row
            row-cols-sm-1
            row-cols-md-1
            row-cols-lg-1
            row-cols-xl-2
            row-cols-xxl-2">
                <div className="col-12 graphics-srvc">
                    <div className="text-area">
                        <h1 className='heading-txt graphics'>Graphic design</h1>
                        <p className='body-txt graphics'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                    
                </div>
                <div className="col-12 graphics-srvc2">
                    <div className="text-area2">
                        <h1 className='heading-txt graphics'>Photography</h1>
                        <p className='body-txt graphics'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;