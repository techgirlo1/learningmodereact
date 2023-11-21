import React, { Fragment, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import Terms from '../components/Terms/Terms'
import PageTop from '../components/PageTop/PageTop'

function TermsPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Terms and Condition"/>
        <PageTop pagetitle="Terms and Condition"/>
        <Terms/>
        <Footer/>

    </Fragment>
  )
}

export default TermsPage
