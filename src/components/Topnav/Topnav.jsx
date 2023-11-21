import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../asset/css/custom.css";
import "../../asset/css/responsive.css";
import { NavLink } from "react-router-dom";
const Topnav = (props) => {
  const [state, setState] = useState({
    navBarTitle: "navtitle",
    background: "bg",
    navItems: "navitem",
    pagetitle:props.title,
    
  });

  const onScroll = () => {
    if (window.scrollY > 100) {
      setState({
        navBarTitle: 'navtitlescroll',
        background: 'bgscroll',
        navItems: 'navitemScroll',
        
      });
    } else {
      setState({
        navBarTitle: 'navtitle',
        background: 'bg',
        navItems: 'navitem',
        
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Fragment>
      <title>{state.pagetitle}</title>
      <Navbar collapseOnSelect fixed="top" expand="lg" className={state.background}>
        <Container fluid>
          <Navbar.Brand><NavLink to="/"  exact activeStyle={{color:'yellow'}} style={{textDecoration:"none"}} className={state.navBarTitle}>LEARNING MODE</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
             <Nav.Link> <NavLink  exact activeStyle={{color:'yellow'}} to="/" className={state.navItems}>HOME</NavLink></Nav.Link>
             <Nav.Link> <NavLink  exact activeStyle={{color:'yellow'}}to="about" className={state.navItems}>ABOUT</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="services" className={state.navItems}>SERVICES</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="courses" className={state.navItems}>COURSES</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="portfolio" className={state.navItems}>PORTFOLIO</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="contact" className={state.navItems}>CONTACT</NavLink></Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Topnav;
