import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import ContentHeader from '../components/ContentHeader';
const Contact = () => {
    return (
        <div className='Contact'>
            <Navigation />
            <div className='contactContent'>
                <ContentHeader />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;