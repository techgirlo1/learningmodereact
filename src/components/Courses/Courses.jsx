import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
function Courses() {



    const [state, setState] = useState({
        myData: [],
        loading:true,
        error:false
      });
      useEffect(() => {
        RestClient.GetRequest(APPUrl.HomeCourse).then((result) => {
          if(result ==null){
            setState({error:true})
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
      let Data=state.myData.map((Data)=>{
          return <Col lg={6} md={12} sm={12}>
            <Zoom top>
                <Row>
            <Col lg={6} md={6} sm={12}>
          <img src={Data.small_img} className='img-fluid courseimg'/>
      
      </Col>


      <Col lg={6} md={6} sm={12}>
           <h5 className="title" style={{textAlign:"start"}}>{Data.short_title}</h5>
           <p className="desc" style={{textAlign:"start"}}>{Data.short_desc}</p>
           <Link to={"/coursedetails/"+ Data.id +"/" +Data.short_title}  className='courseViewMore'>View Details</Link>
      </Col>
      </Row>
      </Zoom>
    </Col>
      
      })





  return (
    <Fragment>
        <Container className=''>
         <LightSpeed>
        <h1 className="titleservice">OUR COURSES</h1>
            <div className="bottom"></div>
            </LightSpeed>
            <Row>
            
                {Data}

            </Row>
        </Container>
    </Fragment>
  )
}
}
export default Courses
