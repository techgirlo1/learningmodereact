import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import loader from '../../asset/images/loader.svg'
function Loading() {
  return (
    <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                   <img src={loader} className='loaderAnimation'/>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Loading
