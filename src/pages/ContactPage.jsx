import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import ContactSec from '../components/ContactSec/ContactSec'
import PageTop from '../components/PageTop/PageTop'
function ContactPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Contact"/>
        <PageTop pagetitle="Contact Me"/>
        <ContactSec/>
        <Footer/>
    </Fragment>
  )
}

export default ContactPage
