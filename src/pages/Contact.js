import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className='Contact'>
            <Navigation />
            <div className='contactContent slide-in'>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;