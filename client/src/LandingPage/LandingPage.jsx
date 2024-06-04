import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Benefits from './Benefits';
import Main from './Main';
import StayConnected from './StayConnected';

const LandingPage = () => {
    return (
        <div>
            <Nav/>
            <Main/>
            <Benefits/>
            <Testimonials/>
            <StayConnected/>
            <Footer/>
        </div>
    )
}

export default LandingPage;