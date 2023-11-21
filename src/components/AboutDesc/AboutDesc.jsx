import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Zoom from 'react-reveal/Zoom';
function AboutDesc() {


  const [state, setState] = useState({
    myData: "",
    loading:true,
    error:false,
  });
  useEffect(() => {
    RestClient.GetRequest(APPUrl.HomeInfo).then((result) => {
      if(result ==null){
        setState({error:true})
      }else{
        setState({ myData: result[0]['about'],loading:false});
      }
      
    }).catch(error=>{
      setState({error:true})
    });
  }, []);

  
 if(state.loading==true){
  return<Loading/>
 }else if(state.error== true){
  return<Failure/>
}else{

  return (
    <Fragment>
        <Container  className='text-cemter mt-5'>
        <Row >
            <Col lg={12} md={12} sm={12} >
              <Zoom top>
                {parse(state.myData)}
                </Zoom>
            </Col>
        </Row>
        </Container>
    </Fragment>
  )
}
}


export default AboutDesc
