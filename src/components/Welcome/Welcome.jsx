import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Wel1 from '../../asset/images/wel1.png'
import Wel2 from '../../asset/images/wel2.png'
import Wel3 from '../../asset/images/wel3.png'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import { Flip } from 'react-reveal'

function Welcome() {
  return (
    <Fragment>
        <div className='introAreaTop'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                  <div className='sectionTitle text-center'>
                      <div className='introAreaInner'>
                         <h6 className='subTitle double-line'>WELCOME</h6>
                         <Jump>
                         <h2 className='mainTitle'>
                            A Community<br/> with Great Value
                         </h2>
                         </Jump>
                        <Container>
                     <Row>
                        <Col lg={4} md={6} sm={12} className='mt-5'>
                        <Slide top>
                            <img src={Wel1} className='img-fluid' style={{width:"600px"}}/>
                            <Flip top>
                            <h1 className='title'>UnderGraduate</h1>
                            <p className='desc '>Lorem Epsilon Lorem ipsum dolor.</p>
                            </Flip>
                            </Slide>
                        </Col>

                        <Col lg={4} md={6} sm={12} className='mt-5'>
                        <Slide top>
                        <img src={Wel2} className='img-fluid' style={{width:"200px"}}/>
                        <Flip top>
                        <h1  className='title'>Graduate</h1>
                        <p className='desc'>Lorem Epsilon Lorem ipsum dolor.</p>
                        </Flip>
                        </Slide>
                        </Col>


                        <Col lg={4} md={6} sm={12} className='mt-5'>
                        <Slide top>
                        <img src={Wel3} className='img-fluid'  style={{width:"300px"}}/>
                        <Flip top>
                        <h1  className='title'>PostGraduate</h1>
                        <p className='desc '>Lorem Epsilon Lorem ipsum dolor.</p>
                        </Flip>
                        </Slide>
                        </Col>
                     </Row>
                </Container>





                <Container style={{background:"yellow"}} className='mt-5 text-center'>
                     <Row>

                        <Col lg={4} md={6} sm={12}>
                            <Row>
                               <Col lg={6} md={6} sm={12}>
                                
                                       <img src="https://cdn-icons-png.flaticon.com/128/11506/11506023.png" className='welcomeImg'/>
                                       
                               </Col>

                               <Col  lg={6} md={6} sm={12} className='pt-4'>
                            <h1 className='text-start welcometitle'>Web Design</h1>
                            <p className=' text-start desc '>Lorem Epsilon Lorem.</p>
                            </Col>
                            </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Row>
                            
                               <Col lg={6} md={6} sm={12}>
                              
                                       <img src="https://cdn-icons-png.flaticon.com/128/4336/4336668.png" className='welcomeImg'/>
                                       
                               </Col>

                               <Col  lg={6} md={6} sm={12}  className='pt-4'>
                            <h1 className=' text-start welcometitle'>Web Development</h1>
                            <p className=' text-start desc '>Lorem Epsilon Lorem.</p>
                            </Col>
                            </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Row>
                               <Col lg={6} md={6} sm={12}>
                               
                                       <img src="https://cdn-icons-png.flaticon.com/128/2065/2065084.png" className='welcomeImg'/>
                                      
                               </Col>

                               <Col  lg={6} md={6} sm={12}  className='pt-4'>
                            <h1 className='text-start welcometitle'>Ecommerce</h1>
                            <p className='text-start desc '>Lorem Epsilon Lorem .</p>
                            </Col>
                            </Row>
                        </Col>
                     </Row>
                </Container>







                      </div>
                  </div>
                </Col>
            </Row>
        </Container>
        </div>
    </Fragment>
  )
}

export default Welcome
