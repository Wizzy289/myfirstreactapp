import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <>
       <MDBNavbar expand='lg' dark bgColor='dark' fixed='top' className='font-link ms-auto'>
        <MDBContainer >
          <MDBNavbarBrand href='#'> <img src="../figma.png" alt="" height="30" loading='lazy'/>ISTAIX</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02, #navbarCenteredExample'
            aria-controls='navbarColor02, navbarCenteredExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => {
              setShowNavColorSecond(!showNavColorSecond);
              setShowNavCentred(!showNavCentred)
            }}
            
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02, navbarCenteredExample ' center>
            <div className='mx-auto'>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem >
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Products</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Jobs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            </div>
            <MDBBtn className='mx-2' color='info' >
        Get Started
      </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      </>
  );
}
