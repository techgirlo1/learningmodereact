import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Fade from 'react-reveal/Fade';

const TopBanner=()=> {


  const[state,setstate]=useState({
    title:"",
    subtitle:"",
    loaderClass:"text-center",
      mainDivClass:"d-none",
      error:false,
  })

  useEffect(()=>{
    RestClient.GetRequest(APPUrl.HomeToptitle).then(result=>{
      if(result ==null){
        setstate({error:true})
      }else{
        setstate({title:result[0]['home_title'],subtitle:result[0]['home_subtitle'],loaderClass:"d-none",mainDivClass:"text-center"});
      }
      
    }).catch(error=>{
      setstate({error:true})
    });
      
  
  }, [])

  
    
  if(state.error== true){
    return<Failure/>
  }else{
    
    return (
      <Fragment>
        <Container fluid className='topFixedBanner p-0'>
        <div className='topBanneroverlay'>
        
          <Container fluid className='learning'>
          <div class="row">
            <div class='col' className={state.loaderClass}>
                 <Loading/>
            </div>
           
          <div class="col-12" className={state.mainDivClass}>
          <Fade top>
          <h1 className='Toptiltle'>{state.title}</h1>
          <h4 className='topsub'>{state.subtitle}</h4>
          </Fade>
                <button type="button" class="btn btn-outline-success">Learn More</button>
                
           </div>
          </div>
        </Container>
          </div>
      </Container>
      </Fragment>
    )
  
}
}
export default TopBanner
