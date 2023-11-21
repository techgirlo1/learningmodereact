import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faClock, faFaceSmile, faTrophy } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";
import Zoom from 'react-reveal/Zoom';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
function Summary() {

  const [state, setState] = useState({
    
    project:"",
    client:"",
    hour:""
  });
  useEffect(() => {
    RestClient.GetRequest(APPUrl.Homedetails).then((result) => {
      
        setState({project:result[0]['total_project'],client:result[0]['total_client'],hour:result[0]['total_hours']});
      })
  }, []);




  return (
   <Fragment>
    <Container fluid className='summaryBanner p-0'>
        <div className='summaryoverlay'>
        <Container  className="text-center">
          <Row>
                <Col lg={8} md={6} sm={12}>
                 <Row className= "proj">
                  
                     <Col lg={4} md={6} sm={12}>
                     <Zoom top>
                     <FontAwesomeIcon icon={faTrophy} className="awesome"/>
                        <h1 className="sumNum">
                        <CountUp start={0} end={state.project}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                        <h4 className="sumTitle">Projects Completed</h4>
                        <div className="line"></div>
                        </Zoom>
                        </Col>
                        
                     <Col lg={4} md={6} sm={12}>
                     <Zoom top>
                     <FontAwesomeIcon icon={ faFaceSmile} className="awesome"/>
                     <h1 className="sumNum">
                        <CountUp start={0} end={state.client}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                    
                        <h4 className="sumTitle">Happy Client</h4>
                        <div className="line"></div>
                </Zoom>
                        </Col>
                     <Col lg={4} md={6} sm={12}>
                     <Zoom top>
                     <FontAwesomeIcon icon={ faClock} className="awesome"/>
                     <h1 className="sumNum">
                        <CountUp start={0} end={state.hour}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                        <h4 className="sumTitle">Hours Spent</h4>
                        <div className="line"></div> 
                        </Zoom>
                        </Col>
                        
                     </Row>
                 </Col>

           

            <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '18rem' }} className=" workCard">
          
      <Card.Body>
        <Card.Title  className="cardtitle">What I Have Achieved</Card.Title>
        <Card.Text>
          <p className="cardsub"><FontAwesomeIcon icon={faCheckSquare} className="bullet"/>  UX Analyisis </p>
          <p className="cardsub"><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> GUI Designing</p>
          <p className="cardsub"><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> Coding Testing</p>
          <p className="cardsub"><FontAwesomeIcon icon={faCheckSquare} className="bullet"/> Implementation </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
            
    </Col>

            </Row>
        </Container>
          </div>
        </Container>
   </Fragment>
  )
}

export default Summary
