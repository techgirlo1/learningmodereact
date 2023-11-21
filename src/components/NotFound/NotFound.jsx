import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function NotFound() {
  return (
    <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                   <h1 className='title'>Page Not Found</h1>
                   <h1 className='notfound'>404</h1>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default NotFound
