import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='banner'>
            <div className='navHeader animated-text'>
                <h1>Thomas Boudot</h1>
                <h2>Développeur intégrateur web</h2>
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
                    <li><NavLink to="/" >
                        <i class="fa-solid fa-sheet-plastic"></i>
                        <span> Mon CV</span></NavLink></li>
                </ul>
            </div >
        </div >
    );
};

export default Navigation;