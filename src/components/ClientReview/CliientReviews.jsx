import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
function CliientReviews() {


    var settings = {
        dots: true,
        autoplaySpeed:3000,
        autoplay:true,
        infinite: true,
        speed: 3000,
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }






    const [state, setState] = useState({
      myData: [],
      loading:true,
      error:false,
      
    });
    useEffect(() => {
      RestClient.GetRequest(APPUrl.reviews).then((result) => {
        if(result ==null){
          setState({error:true})
        }else{
          setState({ myData: result ,loading:false});
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

          return  <div>
          <Row className='text-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
            <Zoom top>
          <img src={Data.client_photo} className='img-fluid circleImg' />
          <h2 className="reviewsTitle">{Data.client_name}</h2>
          <p className="reviewDesc">{Data.client_reviews}</p>
          </Zoom>
      </Col>
          </Row>
          </div>

          
        })












  return (
    <Fragment>
        <Container fluid className='siderBack'>
          <LightSpeed>
        <h1 className="reviewTitle">TESTIMONIALS</h1>
        </LightSpeed>
            <div className="reviewBottom"></div>
            <Slider {...settings}>
            {Data}
               
            </Slider>
        </Container>
    </Fragment>
  )
}
}
export default CliientReviews
