import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import Privacy from '../components/Privacy/Privacy'
import PageTop from '../components/PageTop/PageTop'

function PrivacyPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Privacy Policy"/>
        <PageTop pagetitle="Privacy Policy"/>
        <Privacy/>
        <Footer/>
    </Fragment>
  )
}

export default PrivacyPage
