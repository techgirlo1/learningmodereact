import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import pimg from '../../asset/images/pimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
function ProjectDetails(props) {

     const[state,setState]=useState({
      myProjectid:props.id,
      image_2:"",
      project_name:"",
      project_desc:"",
      project_features:"",
      live_preview:""
     })

     useEffect(() => {
      RestClient.GetRequest(APPUrl.projectDetails + state.myProjectid ).then((result) => {
        setState({image_2:result[0]["image_2"],project_name:result[0]["project_name"],project_desc:result[0]["project_desc"],project_features:result[0]["project_features"],live_preview:result[0]["live_preview"] });
      });
    }, []);
    


  return (
    <Fragment>
        <Container className=' mt-5'>
        <Row>
            <Col lg={6} md={6} sm={12} className='mt-5'>
                <div className='about-thumb-wrap after-shape'>
            <img src={state.image_2} className='img-fluid welcomeimg'/>
            </div>
            </Col>



            <Col lg={6} md={6} sm={12} className='mt-5'>
                <div>
                <h1 className='projectDetailText text-start'>{state.project_name}</h1>
                <p className='text-start detailsName'>{parse(state.project_desc)}</p>

                <p className="cardsub"> <FontAwesomeIcon icon={faCheckSquare} className="bullet"/> {parse(state.project_features)} </p>


                <Button variant='info' href={state.live_preview} target='_blank'>Live  Preview</Button>
                
                </div>
             </Col>
        </Row>
        </Container>
    </Fragment>
  )
}

export default ProjectDetails
