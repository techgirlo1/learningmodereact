import React, { Fragment, useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import AllProject from '../components/AllProject/AllProject'
import PageTop from '../components/PageTop/PageTop'
function PortfolioPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Portfolio"/>
        <PageTop pagetitle="Portfolio"/>
        <AllProject/>
        <Footer/>
    </Fragment>
  )
}

export default PortfolioPage
