import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { init } from 'ityped';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';


function About() {
  const [state, setState] = useState({
    myData: "",
    
  });

  useEffect(() => {
    const myElement = document.querySelector('#myElement');
    init(myElement, { showCursor: false, strings: ['Fullstack Developer!', 'Ui/Ux Designer!'] });

    RestClient.GetRequest(APPUrl.AboutImg).then((result) => {
      
        setState({ myData: result[0]['about_img'] });
      
    })
  }, []);

  
    return (
      <Fragment>
        <Container>
          <LightSpeed>
            <h1 className="titleservice">ABOUT ME</h1>
          </LightSpeed>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className='about'>
                  <Zoom>
                    <img src={state.myData} className='img-fluid aboutImg' alt="About Me" />
                  </Zoom>
                </div>
              </Flip>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Zoom>
                <div className='abtBody'>
                  <h4 className='abtDesc'>HI There, I'm </h4>
                  <h3 className='abtTitle'>Sanusi Habeebat</h3>
                  <h4 className='abtDesc'>Work as a <span id="myElement" style={{ color: 'green' }}></span></h4>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }


export default About;
