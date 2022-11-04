import { useState, useEffect, useNavigate } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import icon1 from '../assets/img/icon1.svg';
import icon2 from '../assets/img/icon2.svg';
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled , setScrolled] = useState(false);

    useEffect(() =>{
         const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
         }
         window.addEventListener("scroll", onScroll);
          
         return () => window.removeEventListener("scroll", onScroll);
    },[])
    
    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }


        return(
          <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/gabriel-melo-dos-santos/" target={'_blank'}><img src={icon1} alt=""/></a>
            <a href="https://github.com/gabrielmds0" target={'_blank'}><img src={icon2} alt=""/></a>
          </div>
          <HashLink to='#link'>
                <button className="vvd"><span>Let’s Link</span></button>
              </HashLink>
            </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )


}