import React, { Fragment , useEffect } from 'react'
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import AllCourses from '../components/AllCourses/AllCourses'
import PageTop from '../components/PageTop/PageTop'
function AllCoursePage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
       <Topnav title="All Courses"/>
        <PageTop pagetitle="All Courses"/>
        <AllCourses/>
        <Footer/>
    </Fragment>
  )
}

export default AllCoursePage
