import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import designicon from '../../asset/images/design.png';
import ecommerceicon from '../../asset/images/ecommerce.png'
import webicon from '../../asset/images/web.png';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from "../Loading/Loading";
import Failure from "../Failure/Failure";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
const Services = () => {
  const [state, setState] = useState({
    myData: [],
    loading:true,
    error:false
  });

  useEffect(() => {
    RestClient.GetRequest(APPUrl.Services).then((result) => {
      if(result ==null){
        setState({error:true,loading:false})
      }else{
        setState({ myData: result,loading:false });
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

  let Data = state.myData.map((Data) => {
    return (
      <div class="col-md-4">   
      <Zoom top> 
        <div className="services">
          <img src={Data.logo} class="img-fluid" className="icon" />
          <h2 className="title">{Data.service_name}</h2>
          <p className="desc">{Data.service_desc}</p>
        </div>
        </Zoom>  
      </div>
    );
  });

  return (
    <Fragment>
      <Container className="text-center">
        <LightSpeed>
        <h1 className="titleservice">OUR SERVICES</h1>
        <div className="bottom"></div>
        </LightSpeed>
        <div class="row">{Data}</div>
        
      </Container>
    </Fragment>
  );
}
};
export default Services;
