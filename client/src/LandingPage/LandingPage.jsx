import React from 'react';
import Container from './Container';
import Nav from './Nav';
import Footer from './Footer';
import Tile from './Tile';

const LandingPage = () => {
    return (
        <div>
            <Nav/>
            <div>
                <h1>See where your entire team is at a glance!</h1>
                <h3>Take the guesswork out of knowing who is in the office, taking vacations, or working remote</h3>
            </div>
            <div>
            <div>
                <h2>Smooth Updates</h2>
                <h3>Alert your team when you'll be out of the office or working remotely. Manage expectations easily, even across different time zones.</h3>
            </div>
            <div>
                <h2>Real-Time Team Visibility</h2>
                <h3>Improved team coordination: Know when teammates are on leave, working from home, or in different time zones. Enhace coordination and avoid miscommunications effortlessly.</h3>
                <button> Click to learn more
                </button>
            </div>
            </div>
            <div>
                <h2>Here is what our customers say about OOTO</h2>
                <div>
                  <p>With a hybrid work schedule, it can be hard to see who is working, but now with OOTO I know that my team is hard at work wherever they are.</p>
                  <h3>Michael</h3>
                  <h4>Regional Manager</h4>
                </div>
                <div>
                  <p>My manager always forgets when I am traveling in a different timezone for work. Now with OOTO I do not get calls in the middle of the night!</p>
                  <h3>Jim</h3>
                  <h4>International Paper Salesman</h4>
                </div>
                <div>
                  <p>I broke my leg which meant I had to be on short-term disability. With OOTO my team can tell the difference between when I am on sick leave not working, vs. when I am working from home.</p>
                  <h3>Dwight</h3>
                  <h4>Assistant to the Regional Manager</h4>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;