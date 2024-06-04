import React from 'react';
import Testimonials from './Testimonials';
import Benefits from './Benefits';
import Main from './Main';
import StayConnected from './StayConnected';

const LandingPage = () => {
    return (
        <div>
            <Main/>
            <Benefits/>
            <Testimonials/>
            <StayConnected/>
        </div>
    )
}

export default LandingPage;