import {MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
    return (
        <div style={{backgroundColor: '#5d5d5d'}}>
            <MDBContainer breakpoint="md" style={{color: '#FBFBFB'}}>
                {/*Footer*/}
                <MDBRow className='py-5'>

                    {/*Studio Info*/}
                    <MDBCol size='4'>
                        <h4 className='mb-3'> Westream.id Studio </h4>
                        <p className="fw-light">Cluster Puri Cipta Satria, Jl. Sidodadi No.9, Purwokerto</p>
                    </MDBCol>
                    <MDBCol size='4'/>

                    {/*ContactUs*/}
                    <MDBCol size='4'>
                        <h4 className='mb-3'> Contact Us </h4>

                        {/*Telp*/}
                        <MDBRow>
                            <MDBCol size='1'>
                                <MDBIcon fas icon="phone-alt" size='1x' style={{color: '#FBFBFB'}}/> {/*Telp*/}
                            </MDBCol>
                            <MDBCol>
                                <p className="fw-light">+62 821-3731-6042</p> {/*Text*/}
                            </MDBCol>
                        </MDBRow>

                        {/*email*/}
                        <MDBRow>
                            <MDBCol size='1'>
                                <MDBIcon far icon="envelope" size='1x' style={{color: '#FBFBFB'}}/> {/*Icon*/}
                            </MDBCol>
                            <MDBCol>
                                <p className="fw-light">westreamid.pwt@gmail.com</p> {/*Text*/}
                            </MDBCol>
                        </MDBRow>

                        {/*ig*/}
                        <MDBRow>
                            <MDBCol size='1'><MDBIcon fab icon="instagram" size='1x' style={{color: '#FBFBFB'}}/></MDBCol> {/*Icon*/}
                            <MDBCol><p className="fw-light">@westreamid</p></MDBCol> {/*Text*/}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}