import React, { Fragment } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicesPage from '../pages/AllServicesPage';
import AboutPage from '../pages/AboutPage';
import AllCoursePage from '../pages/AllCoursePage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
import RefundDescPage from '../pages/RefundDescPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
  
function AppRouter() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  exact path="/services" component={AllServicesPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/courses" component={AllCoursePage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/portfolio" component={PortfolioPage}/>
          <Route exact path="/refund" component={RefundDescPage}/>
          <Route exact path="/terms" component={TermsPage}/>
          <Route exact path="/privacy" component={PrivacyPage}/>
          <Route exact path="/project/:projectID/:projectname" component={ProjectDetailsPage}/>
          <Route exact path="/coursedetails/:courseID/:coursename" component={CourseDetailsPage}/>
          <Route  component={NotFoundPage}/>
        </Switch>
    </Fragment>
  )
}

export default AppRouter
