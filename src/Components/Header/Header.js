import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Cover from '../Cover/Cover';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Programs from '../Programs/Programs';


const Header = () => {
    return (
        <div>
        <div className="pics">
            <Navbar />
            <Cover />
        </div>
           <Services />
           <AboutUs/>
           <Programs/>
        </div>
    );
};

export default Header;