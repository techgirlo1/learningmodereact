import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { faBehance, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function Footer() {

    var current=moment().format("YYYY")


    const [state, setState] = useState({
        address: "",
        email:"",
        phone:"",
        instagram:"",
        behance:"",
        linkden:"",
        loaderClass:"p-3 text-justify",
        mainDivClass:"d-none",
        error:false

      });
      useEffect(() => {
        RestClient.GetRequest(APPUrl.Footer).then((result) => {

          if(result ==null){
            setState({error:true})
          }else{
            setState({ address: result[0]['address'],email: result[0]['email'],phone: result[0]['phone'],instagram: result[0]['instagram'],behance: result[0]['behance'],linkden: result[0]['linkden'],loaderClass:"d-none",mainDivClass:"p-3 text-justify"});
          }
          
        }).catch(error=>{
          setState({error:true})
        });
         
      }, []);


      
       if(state.error== true){
        return<Failure/>
      }else{
    
  return (
    <Fragment>
        <Container fluid className='footerSect'>
            <Row>
                <Col lg={3} md={6} sm={12} className='p-3 text-center'>
                    <h2 className='footerName text-center'>Follow Us</h2>
                    <div className='socialcont'>
                    <a href={state.  linkden} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='2x' className='social' /></a>
                    <a href={state.instagram} target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' className='social'/></a>
                    <a href={state. behance} target='_blank'><FontAwesomeIcon icon={faBehance} size='2x' className='social'/></a>
                    </div>
                </Col>
                  <Col className={state.loaderClass}>
                     <Loading/>
                  </Col>
                <Col lg={3} md={6} sm={12} className={state.mainDivClass}>
                <h2  className='footerName'>Address</h2>
                <p className='footerdesc'>
                    {state.address}<br/>
                    <FontAwesomeIcon icon={faEnvelope}/>Email:{state.email}<br/>
                    <FontAwesomeIcon icon={faPhone}/>Phone:{state.phone}
                </p>
                </Col>

                <Col lg={3} md={6} sm={12} className='p-3 text-justify'>
                <h2  className='footerName'>Information</h2>
                <NavLink to="about" className='footerLink' >About</NavLink><br/>
                <NavLink to="about" className='footerLink' >Company Profile</NavLink><br/>
                <NavLink to="contact" className='footerLink' >Contact</NavLink><br/>
                
                </Col>

                <Col lg={3} md={6} sm={12} className='p-3 text-justify'>
                <h2 className='footerName'>Policy</h2>
                <NavLink   to="refund"  className='footerLink'>Refund Policy</NavLink><br/>
                <NavLink  to="terms"  className='footerLink'>Terms and Condition</NavLink><br/>
                <NavLink exact activeStyle={{color:"yellow"}} to="privacy"  className='footerLink'>Privacy Policy</NavLink><br/>
               
                </Col>
            </Row>
        </Container>


        <Container fluid className='text-center copywrite'>
              <a href="" className='copyLink'> &copy;Copywrite {current} by Sanusi Habeebat.All Right Reserved</a>
        </Container>
    </Fragment>
  )
}
}
export default Footer
