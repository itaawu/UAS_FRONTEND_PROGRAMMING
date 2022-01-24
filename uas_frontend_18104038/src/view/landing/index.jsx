import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Carousel from "../../component/carousel";
import {MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import ImgMeet from '../../asset/images/meet.png';
import React from "react";
import logo from "../../asset/images/logo.jpg";
import ImgIta from "../../asset/images/ita.png"
import ImgElla from "../../asset/images/ella.png"

export default function Landing() {

    return (
        <div>
            {/*Panggil navbar*/}
            <Navbar/>

            {/*Panggil Carousel*/}
            <Carousel/>

            {/*Isi landing*/}
            <MDBContainer breakpoint="md">
                {/*About*/}
                <div id='About' className='pt-5'>
                    <MDBRow center className='py-5'>
                        <MDBCol size='6' className={'text-center'}>
                            <img
                                src={ImgMeet}
                                height='500'
                                width='500'
                                alt=''
                                className='img-fluid rounded-circle'
                            />
                        </MDBCol>
                        <MDBCol size='6' center className='px-3'>
                            <h3 className='mb-3 text-center'> About Westream.id </h3>
                            <p className="fw-light" style={{textAlign: 'justify'}}> Tidak bisa dipungkiri peran sentral
                                Digital Creative Media dalam suatu industri semakin meningkat berdasarkan trend pengguna
                                internat pada tahun 2020. Pemilihan dan penggunaan jasa perusahaan kreatif memiliki
                                banyak manfaat terutama jika tidak memiliki tim kreatif. Tidak hanya bisa membantu untuk
                                meningkatkan awareness pasar namun juga citra dari bisnis perusahaan tersebut.
                                Westream.id adalah stratup dibidang digital cretive, menyediakan jasa Digital marketing
                                agency, Vrtual event organizer, sosial media Management, Content website Management ,
                                creative Content media , Campaign & Brand.
                                Ini lah saatnya, We Spotlight your value!</p>
                        </MDBCol>
                    </MDBRow>
                </div>

                {/*Line*/}
                <hr/>

                {/*Our Services*/}
                <div id='OurServices' className="pt-5">

                    {/*Judul*/}
                    <h3 className='text-center pt-5'>Our Services</h3>

                    {/*Isi*/}
                    <MDBRow center className='py-5'>
                        <MDBCol className={'text-center'}>
                            <MDBIcon className='mb-4' icon='camera' size='4x' style={{color: '#9C27B0'}}/>
                            <h5>Creative Content Media</h5>
                        </MDBCol>
                        <MDBCol className={'text-center'}>
                            <MDBIcon fas icon="podcast" className='mb-4' size='4x' style={{color: '#E91E63'}}/>
                            <h5>Virtual Event Organizer</h5>
                        </MDBCol>
                        <MDBCol className={'text-center'}>
                            <MDBIcon fas icon="briefcase" className='mb-4' size='4x' style={{color: '#3F51B5'}}/>
                            <h5>Digital Marketing Agency</h5>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow center className='py-5'>
                        <MDBCol className={'text-center'}>
                            <MDBIcon fas icon="address-card" className='mb-4' size='4x' style={{color: '#2196F3'}}/>
                            <h5>Campaign & Brand</h5>
                        </MDBCol>
                        <MDBCol className={'text-center'}>
                            <MDBIcon fas icon="globe" className='mb-4' size='4x' style={{color: '#673AB7'}}/>
                            <h5>Website Content Management</h5>
                        </MDBCol>
                        <MDBCol className={'text-center'}>
                            <MDBIcon fas icon="mobile-alt" className='mb-4' size='4x' style={{color: '#26A69A'}}/>
                            <h5>Social Media Management</h5>
                        </MDBCol>
                    </MDBRow>
                </div>

                {/*Line*/}
                <hr/>

                {/*Our Team*/}
                <div id='OurTeam' className='pt-5'>
                    {/*Judul*/}
                    <h3 className='text-center pt-5'>Our Team</h3>

                    {/*Avatar*/}
                    <MDBRow center className='py-5'>
                        <MDBCol size='3' className={'text-center'}>
                            <img
                                src={ImgElla}
                                height='150'
                                width='150'
                                alt=''
                                className='img-fluid rounded-circle mb-3'
                            />
                            <h5>Ella Manisa</h5>
                            <p className="fw-light">Social Media Management</p>
                        </MDBCol>
                        <MDBCol size='3' className={'text-center'}>
                            <img
                                src={ImgIta}
                                height='150'
                                width='150'
                                alt=''
                                className='img-fluid rounded-circle mb-3'
                            />
                            <h5>Ita Wulan</h5>
                            <p className="fw-light">Website Content Management</p>
                        </MDBCol>

                    </MDBRow>
                </div>
            </MDBContainer>

            {/*Panggil footer*/}
            <Footer/>
        </div>
    )

}