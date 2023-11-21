import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
function Videos() {
  const [state, setState] = useState({
    video_url: '',
    video_desc: '',
    loading:true,
    error:false
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    RestClient.GetRequest(APPUrl.HomeVideo).then((result) => {
      if(result ==null){
        setState({error:true})
      }else{
      setState({video_url : result[0]['video_url'] ,video_desc : result[0]['video_desc'],loading:false});
      }
    }).catch(error=>{
      setState({error:true})
    });
  }, []);

  
  if (state.loading==true) {
    return <Loading />;
  }else if(state.error==true){
      return <Failure/>
  }else{

  return (
    <Fragment>
      <Container>
        <LightSpeed>
        <h1 className="titleservice">OUR VIDEOS</h1>
        <div className="bottom"></div>
        </LightSpeed>
        <Row>
          
          <Col lg={6} md={6} sm={12} className="mt-4">
          <Zoom clear>
            <p className="text-justify desc">{parse(state.video_desc)}</p>
            </Zoom>
          </Col>

          <Col lg={6} md={6} sm={12} className="videocard text-center">
            <FontAwesomeIcon
              icon={faVideoSlash}
              onClick={handleShow}
              size="lg"
              className="iconProject"
            />
          </Col>
        </Row>
      </Container>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Player src={state.video_url}>
            <BigPlayButton position="center" />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
}
export default Videos;
