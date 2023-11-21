import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import PageTop from '../components/PageTop/PageTop'
import AboutDesc from '../components/AboutDesc/AboutDesc'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

function AboutPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="About Me"/>
        <PageTop pagetitle="About Me"/>
        <About/>
        <AboutDesc/>
        <Footer />
    </Fragment>
  )
}

export default AboutPage
