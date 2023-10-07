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
                    <li><NavLink to="/" activeClassName="navActive">
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="navActive">
                        <i class="fa-solid fa-folder"></i>
                        <span>Mon portfolio</span>
                    </NavLink></li>
                    <li><NavLink to="/contact" activeClassName="navActive">
                        <i class="fa-solid fa-message"></i>
                        <span>Contact</span>
                    </NavLink></li>
                    <li><NavLink to="/" activeClassName="navActive">
                        <i class="fa-solid fa-sheet-plastic"></i>
                        <span> Mon CV</span></NavLink></li>
                </ul>
            </div >
        </div >
    );
};

export default Navigation;