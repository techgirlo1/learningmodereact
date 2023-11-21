import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import RefundDesc from '../components/RefundDesc/RefundDesc'
import PageTop from '../components/PageTop/PageTop'

function RefundDescPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav tiltle="Refund Policy"/>
        <PageTop pagetitle="Refund Policy"/>
        <RefundDesc/>
        <Footer/>
    </Fragment>
  )
}

export default RefundDescPage
