import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Nav from './LandingPage/Nav';
import Footer from './LandingPage/Footer'

const App = () => {
    return (<div>
        <Nav/>
        Welcome to OOTO
        <LandingPage/>
        <Footer/>
    </div>);
};

export default App;