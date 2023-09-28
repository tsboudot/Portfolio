import React from 'react';
import Navigation from '../components/Navigation';
const Homepage = () => {
    return (
        <div className='homePage'>

            <Navigation />
            <div className='homeContent'>
                <div className="homeContent_Header">
                    <h1>Thomas Boudot</h1>
                    <h3>Développeur Front-End Junior</h3>
                    <p>Téléchargez mon CV</p>
                </div>
                <div className='homeContent_main'>
                    <div className='homeContent_right'>
                    </div>
                    <div className="homeContent_left">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;