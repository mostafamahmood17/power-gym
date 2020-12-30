import React from 'react';
import './Navbar.css'

const Navbar = () => {
 
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-light container">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white" href="#">Power <span style={{color:'#ffa500'}}>X</span></a>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav margin" >
                            <li className="nav-link text-white" href="#">Home</li>
                            <li className="nav-link text-white" href="#">Features</li>
                            <li className="nav-link text-white" href="#">Pricing</li>
                            <li className="nav-link text-white" href="#" >Disabled</li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;