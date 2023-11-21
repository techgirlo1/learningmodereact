import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 
import Topnav from '../components/Topnav/Topnav'
import Footer from '../components/Footer/Footer'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import PageTop from '../components/PageTop/PageTop'
function CourseDetailsPage() {

  const { courseID,coursename } = useParams(); // Use useParams to get the projectID from the URL

  const [state, setState] = useState({

    // passing the projectiD and projectName from Approuter
    coursePassedID: courseID,
    coursePassedName:coursename,
  });

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
   <Fragment>
       <Topnav title="Course Details"/>
       <PageTop pagetitle={state.coursePassedName}/>
       <CourseDetails id={state.coursePassedID}/>
       <Footer/>
   </Fragment>
  )
}

export default CourseDetailsPage
