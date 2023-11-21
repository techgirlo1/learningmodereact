import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Topnav from '../components/Topnav/Topnav';
import Footer from '../components/Footer/Footer';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import PageTop from '../components/PageTop/PageTop';

function ProjectDetailsPage() {
  const { projectID,projectname } = useParams(); // Use useParams to get the projectID from the URL

  const [state, setState] = useState({

    // passing the projectiD and projectName from Approuter
    projectPassedID: projectID,
    projectPassedName:projectname,
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <Topnav title="Project Details" />
      <PageTop pagetitle={state.projectPassedName} />
      <ProjectDetails id={state.projectPassedID}/>
      <Footer />
    </Fragment>
  );
}

export default ProjectDetailsPage;
