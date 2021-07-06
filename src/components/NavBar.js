import React from 'react';
import './components.css';
import Logo from '../images/V.png'
import { Link } from  'react-router-dom';

const NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navBar">
            <img className="navbarImg" src={Logo} alt="" />
            <Link className="navButton">About Me</Link>
            <Link className="navButton">Skills</Link>
            <Link className="navButton">Proyectos</Link>
            <Link className="navButton">Contacto</Link>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;