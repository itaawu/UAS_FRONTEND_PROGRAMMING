import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import slide1 from '../../asset/images/slide1.png'
import slide2 from '../../asset/images/slide2.png'

export default function Carousel(){
    return (
        //Carousel main
        <MDBCarousel showIndicators fade>
            <MDBCarouselInner>
                {/*item dari carousel slide 1*/}
                <MDBCarouselItem className='active' style={{height:600}}>
                    <MDBCarouselElement src={slide1} alt='slide1'  /> {/*Image*/}
                    <MDBCarouselCaption>
                        <h5>Vision</h5>
                        <p>To be the partner which has professionalism spirit for the client satisfaction.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                {/*item dari carousel slide 2*/}
                <MDBCarouselItem style={{height:600}}>
                    <MDBCarouselElement  src={slide2} alt='slide2' /> {/*image*/}
                    <MDBCarouselCaption>
                        <h5>Mission</h5>
                        <p>Performing a quality service for the client & Providing solutions for the client needs.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}