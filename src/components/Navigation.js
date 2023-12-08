import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='banner'>
            <div className='navHeader animated-text'>
                <h1>Thomas Boudot</h1>
                <h2>Développeur Front-End React / Javascript</h2>
            </div>

            <div className="navigation">
                <ul>
                    <li><NavLink to="/" >
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink></li>
                    <li><NavLink to="/portfolio" >
                        <i class="fa-solid fa-folder"></i>
                        <span>Mon portfolio</span>
                    </NavLink></li>
                    <li><NavLink to="/contact" >
                        <i class="fa-solid fa-message"></i>
                        <span>Contact</span>
                    </NavLink></li>
                    <li> <a href="CV_Boudot.pdf" download>
                        <i className="fa-solid fa-sheet-plastic"></i>
                        <span>Mon CV</span>
                    </a></li>
                </ul>
            </div >
        </div >
    );
};

export default Navigation;