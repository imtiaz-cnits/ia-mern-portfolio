import React from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import ContactHero from "../components/Contact/ContactHero.jsx";
import ContactMe from "../components/Contact/ContactMe.jsx";
import ContactMethod from "../components/Contact/ContactMethod.jsx";

const ContactPage = () => {
    return (
        <MasterLayout>
            <ContactHero />
            <ContactMe />
            <ContactMethod />
        </MasterLayout>
    );
};

export default ContactPage;