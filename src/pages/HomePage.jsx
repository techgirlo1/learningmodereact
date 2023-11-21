import React, { Fragment, useEffect } from 'react'
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import Topnav from '../components/Topnav/Topnav';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Videos from '../components/Videos/Videos';
import CliientReviews from '../components/ClientReview/CliientReviews';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';


function HomePage() {
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
       <Topnav title="Home"/>
      <TopBanner/>
      <Welcome/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProject/>
      <Courses/>
      <Videos/>
      <CliientReviews/>
      <About/>
      <Footer/>
    </Fragment>
  )
}

export default HomePage
