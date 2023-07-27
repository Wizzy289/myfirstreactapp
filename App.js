import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { motion } from 'framer-motion';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
  MDBFooter,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBInputGroup
  } from 'mdb-react-ui-kit';




function App() {
  return (
<React.Fragment>
  <>
    <Navbar />
    
    <main>
    
    <MDBCarousel >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      >
        
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        
              </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        
        
      </MDBCarouselItem>
    </MDBCarousel>
    <motion.div className="d-flex align-items-center"style={{ height: "500px", textAlign:'center', fontSize: '52'}}
     whileHover={{scale: 1  }} initial={{scale: 0.8}}>
        <MDBCol>
          <h1 className='font-link' style={{fontWeight:'bold'}}>
            Over a Decade of <br/> Achievements
          </h1>
          <h6 className='font-link'>With our super powers we have reached this</h6>
        </MDBCol>
        <MDBCol>
          <MDBIcon fab icon="amazon" /> 
          <h3 className='font-link'> 10,000+</h3>
          <h6 className='font-link'>Satisfied Clients</h6>
          <MDBIcon fab icon="amazon-pay" />
          <h3 className='font-link'> 10,000+</h3>
          <h6 className='font-link'>Satisfied Clients</h6>
          </MDBCol>
        <MDBCol><MDBIcon fas icon="american-sign-language-interpreting" /> 
        <h3 className='font-link'> 2 Million</h3>
          <h6 className='font-link'>Skilled Workers</h6>
          <MDBIcon fab icon="android" />
          <h3 className='font-link'> 10,000+</h3>
          <h6 className='font-link'>Satisfied Clients</h6>
          </MDBCol>
              
      </motion.div>
      
          <h3 className='font-link' style={{ textAlign: 'center', fontWeight: 'bold'}}>OUR TRUSTED CLIENTS</h3>
          <div className='font-link' style={{textAlign:'center', display:'flex', alightItems: "cneter", justifyContent:'center'}}>
          <motion.div whileHover={{y: -4}}>
            <MDBBtn color='light' className='mb-5 w-200 h-50' style={{boxShadow: '1px 2px 9px #F4AAB9',}}>
              
        Google
      </MDBBtn>
      </motion.div>
       
      <motion.div whileHover={{y: -4}}><MDBBtn color='light' className='mb-5 mx-5 w-50 h-50'  style={{boxShadow: '1px 2px 9px #F4AAB9',}}>
        YouTube
      </MDBBtn>
      </motion.div>
      <motion.div whileHover={{y: -4}}><MDBBtn color='light' className='mb-5 w-200 h-50'  style={{boxShadow: '1px 2px 9px #F4AAB9',}}>
        BoomPlay
      </MDBBtn>
      </motion.div>
      </div>

      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} className='font-link'>
      <MDBCard className='w-25 p-5 h-25'>
      <MDBCardImage src={image3} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><h3 style={{fontWeight:'bold'}}>Canadian Construction Branches</h3></MDBCardTitle>
        <MDBCardText style={{fontSize:'10'}}>
          We'll supply you with materials to create your dream property from foundation to finish <br />
          call to get started! 
        </MDBCardText>
        <MDBBtn color='dark'>Read More</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='w-25 p-5 h-25'>
      <MDBCardImage src={image2} position='top' alt='...' />
      <MDBCardBody>
      <MDBCardTitle><h3 style={{fontWeight:'bold'}}>Australian Construction Branches</h3></MDBCardTitle>
        <MDBCardText style={{fontSize:'10'}}>
          We'll supply you with materials to create your dream property from foundation to finish <br />
          call to get started! 
        </MDBCardText>
        <MDBBtn color='dark'>Read More</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='w-25 p-5 h-25'>
      <MDBCardImage src={image1} position='top' alt='...' />
      <MDBCardBody>
      <MDBCardTitle><h3 style={{fontWeight:'bold'}}>Brazilian Construction Branches</h3></MDBCardTitle>
        <MDBCardText style={{fontSize:'10'}}>
          We'll supply you with materials to create your dream property from foundation to finish <br />
          call to get started! 
        </MDBCardText>
        <MDBBtn color='dark'>Read More</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </div>
    <br/> <br/> <br/> <br/>
      <h3 className='font-link' style={{ textAlign: 'center', fontWeight: 'bold'}}>Let Us Help You Build.</h3> <br/>
      <h6 className='font-link' style={{ textAlign: 'center',}}>Over 17years on experience in creating spaces that positive impact people's lives </h6>
      <br/>
      <div style={{justifyContent:'center', alignContent:'center', textAlign:'center'}}>
      <motion.img src={image7} alt=""  className='square bg-primary rounded-top square bg-primary rounded-end mb-5' whileInView={{scale: 1.2}}/>
      </div>

      <div className='bg-info shadow-1-strong ' style={{height: '500px', width:'100%'}}>
        <br/> 
      <h3 className='font-link' style={{ textAlign: 'center', fontWeight: 'bold'}}>Few Words Form Our Clients</h3>
      <br/>

      <div className='font-link' style={{height:'200px', display:'flex', width:'800px', alignSelf:'center', justifyContent:'center', borderRadius:'10px', backgroundColor:'white', margin:'0 auto'}}>
        <br/> <br/>
        <div style={{width: '700px'}}>
          <h1>"</h1>
        <h6>We had an incredible experience working with them and were impressed they
          made such a big difference in only three weeks. Our team is so grateful for the wonderful
          improvements they made and their ability to get familiar with the product concept so quickly.
          It acted as a catalyst to take our design to the next level and get more eyes on our product.
        </h6>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div style={{height:'50px', width:'50px', borderRadius:'50', backgroundColor:'white'}}></div>
          
        </div>
      </div>
      </div>
        
      <div className='bg-whits shadow-1-strong font-link' style={{height: '300px', width:'100%'}}>
        <br/> <br/>
      <div style={{ alignContent:'center', justifyContent:'center', alightItems:'center', textAlign:'center', position:'relative'}}>
        <div style={{alignContent:'end', justifyContent:'end'}}>
        <img src={image8} alt="" style={{height:'200px', borderRadius:'10px'}}/>  
            
          </div>
        <div style={{position: 'absolute', right: '15%', left: '30%', bottom: '60%'}}>
        <h5>Get a Free Quote Now!</h5>
        <div tag="form" className='d-flex' style={{marginLeft:'200px'}}>
          <input className='form-control' placeholder="Your Work Email" aria-label="Email" type='Email' style={{width:'200px'}} />
          <MDBBtn>Join the Waitlist</MDBBtn>
        </div>
       
        </div>
        </div>
  </div> 

          <MDBFooter className='text-center font-link' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Submit Email for Latest Updates</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Download Now
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Lincense
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Help
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Featuers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy 
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Policy
                  </a>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Figma.com
        </a>
      </div>
    </MDBFooter>
      
        
     
          
      </main> 
  </> 
    </React.Fragment>
  );
}

export default App;
