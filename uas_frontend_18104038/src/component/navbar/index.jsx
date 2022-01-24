
import React, {useState} from 'react';
import {
    MDBCollapse,
    MDBContainer, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler
} from 'mdb-react-ui-kit';
import logo from '../../asset/images/logo.jpg'

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        //Navbar
        <MDBNavbar sticky expand='lg' light bgColor='light'>
            <MDBContainer fluid className='px-4'>
                {/*Logo Navbar*/}
                <MDBNavbarBrand href='#'>
                    <img
                        src={logo}
                        height='50'
                        width='50'
                        alt=''
                        className='img-fluid rounded-circle'
                    />
                    <h5 className='mx-3'>WESTREAM.ID</h5>
                </MDBNavbarBrand>

                {/*Jika halaman tidak full*/}
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarRightAlignExample'
                    aria-controls='navbarRightAlignExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                {/*Isi navbar*/}
                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav  right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#About'> About </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#OurServices'>Our Services</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#OurTeam'>Our Team</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}