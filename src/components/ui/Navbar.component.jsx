
import React from 'react';
import {Link} from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import './Navbar.css';


const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div>
                    <FaCoins className="navbar-logo-icon" />
                    <span className="navbar-logo-text">Crypto</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">faq</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact us</Link>
                        </li>
               
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;