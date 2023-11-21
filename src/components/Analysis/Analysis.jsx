import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BarChart, ResponsiveContainer, Bar, XAxis, Tooltip } from 'recharts';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from "../Loading/Loading";
import Failure from "../Failure/Failure";
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
const Analysis = () => {
  const [state, setState] = useState({
    data: [],
    techdesc: "",
    loading:true,
    error:false,
  });

  useEffect(() => {
    
    RestClient.GetRequest(APPUrl.Chart).then((result) => {
      if(result ==null){
        setState({error:true})
      }else{
        setState((prevState) => ({ ...prevState, data: result ,loading:false}));
      }
      
    }).catch(error=>{
      setState({error:true})
     
    });

    RestClient.GetRequest(APPUrl.HomeTechDesc).then((result) => {
      setState((prevState) => ({ ...prevState, techdesc: result[0]['tech_desc'] }));
    });
  }, []);

  if(state.loading==true){
    return<Loading/>
   }else if(state.error== true){
    return<Failure/>
  }else{
  
  return (
    <Fragment>
      <Container className="text-center">
        <LightSpeed>
        <h1 className="titleservice">TECHNOLOGY USED</h1>
        </LightSpeed>
        <div className="bottom"></div>
        <div className="row">
          <div className="col-md-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={100} height={500} data={state.data}>
                <XAxis dataKey='Technology' />
                <Tooltip />
                <Bar dataKey='project' fill="green "></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
                  <Zoom>
          <div className="col-md-6">
            <p className="text-start desc">{parse(state.techdesc)}</p>
          </div>
          </Zoom>
        </div>
      </Container>
    </Fragment>
  );
};
}
export default Analysis;
