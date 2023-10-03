import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
const Contact = () => {
    return (
        <div className='Contact'>
            <Navigation />
            <div className='contactContent'>
                <div className="ContactContent_Header">
                    <h1>Thomas Boudot</h1>
                    <h3>Développeur Front-End Junior</h3>
                    <p>Téléchargez mon CV</p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;