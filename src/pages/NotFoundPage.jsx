import React, { Fragment } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import NotFound from '../components/NotFound/NotFound'
import PageTop from '../components/PageTop/PageTop'

function NotFoundPage() {
  return (
    <Fragment>
        <Topnav title="404 Page Not Found"/>
        <PageTop pagetitle="Page Not Found"/>
         <NotFound/>
        <Footer/>
    </Fragment>
  )
}

export default NotFoundPage
