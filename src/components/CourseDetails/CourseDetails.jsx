import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faClipboard, faClock, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
function CourseDetails(props) {

    const[state,setState]=useState({
        myCourseid:props.id,
        small_img:"",
        long_title:"",
        long_desc:"",
        total_duration:"",
        total_student:"",
        total_lecture:"",
        skill_all:"",
        video_url:"",
       })
  
       useEffect(() => {
        RestClient.GetRequest(APPUrl.CourseDetails + state.myCourseid ).then((result) => {
          setState({small_img:result[0]["small_img"],long_title:result[0]["long_title"],long_desc:result[0]["long_desc"],total_duration:result[0]["total_duration"],total_student:result[0]["total_student"],total_lecture:result[0]["total_lecture"],skill_all:result[0]["skill_all"],video_url:result[0]["video_url"] });
        });
      }, []);
      
  




  return (
   <Fragment>
       <Container className='mt-5'>
         <Row>
            <Col lg={8} md={6} sm={12}>
                <h1 className='coursedetailsText'>{parse(state.long_title)}</h1> 
                <img src={state.small_img} className='img-fluid coursedetailsImg'/><br/><br/>
                {parse(state.long_desc)}
            </Col>


            <Col lg={4} md={6} sm={12}>
                <div className="widgetFeature">
                    <h4 className='widgettitle m-3' >Course Features</h4>
                    <hr/>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser}/><span>Enrolled  :</span> {state.total_student} Students</li>
                        <li><FontAwesomeIcon icon={faClock}/><span>Duration  :</span> {state.total_duration} Hours</li>
                        <li><FontAwesomeIcon icon={faClipboard}/><span>Lectures  :</span> {state.total_lecture}</li>
                        <li><FontAwesomeIcon icon={faClone}/><span>Categories  :</span> Technology</li>
                        <li><FontAwesomeIcon icon={faTags}/><span>Tags  :</span> React,</li>
                        <li><FontAwesomeIcon icon={faClipboard}/><span>Lecturer  :</span> Sanusi Habeebat</li>
                    </ul>

                    <div className='text-center price'>
                        <h5>Price: <span>$20.0</span></h5>
                        <Button className='btn btn-warning'>ENROLL COURSE</Button>
                        

                    </div>

                </div>
            </Col>
         </Row>
       </Container>
  <br/><br/>
       <Container>
         <Row>
            <Col lg={6} md={6} sm={12}>
                <div  className="widgetFeature">
            <h1 className='coursedetailsText'>Skills You Need.</h1>
            <hr/>
            <ul>
                 <li><FontAwesomeIcon icon={faCheckSquare} className="bullet"/>{parse(state.skill_all)}</li>
                 <li><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> {parse(state.skill_all)}</li>
                 <li><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> {parse(state.skill_all)}</li>
                 <li><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> {parse(state.skill_all)}</li>
                 <li><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> {parse(state.skill_all)}</li>
                </ul>
                </div> 
            </Col>
            
            <Col lg={6} md={6} sm={12}>
        <Player src={state.video_url}>
               <BigPlayButton position="center" />
           </Player>
            </Col>
         </Row>
       </Container>
   </Fragment>
  )
}

export default CourseDetails
