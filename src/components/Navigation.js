import React from 'react';
import { NavLink } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <h2>Thomas Boudot</h2>
                <h3>Développeur web junior</h3>
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
                </ul>
            </div>
            <div className="socialNetwork" display="hidden">
                <ul><li>Lien linkedin</li></ul>
            </div>
        </div >
    );
};

export default Navigation;