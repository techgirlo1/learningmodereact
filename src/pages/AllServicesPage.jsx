import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import PageTop from '../components/PageTop/PageTop'
import ContactSec from '../components/ContactSec/ContactSec'

function AllServicesPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
   <Fragment>
       <Topnav title="All Services"/>
       <PageTop pagetitle="Our Services"/>
       <Services/>
       <ContactSec/>
       <Footer/>
  </Fragment>
  )
}

export default AllServicesPage
