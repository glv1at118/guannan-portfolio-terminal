import React from 'react';
import '../styles/experience.css';

export default class Experience extends React.Component {
    render() {
        return (
            <ul id="my-exp">
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Front End Developer Intern At Somoplay Inc.</p>
                        <p className="exp-info">
                            - Duration: May 2020 - Present<br />
                            - I worked for Somoplay as a front end developer intern, helped Somoplay build its new mobile-responsive homepage, as well as its admin content management portal<br />
                            - Technologies: Javascript (ES5/ES6), HTML5, CSS3, Scss, Vue3, Vuex, Vue-Router, TinyMCE, Element UI<br />
                            - Link: <a href="#" target="_blank" rel="noopener noreferrer">website pre-launch</a>
                        </p>
                    </div>
                </li>
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Programmer Collaborator At Torneo.ca</p>
                        <p className="exp-info">
                            - Duration: May 2019 - September 2019<br />
                            - I worked for Torneo as a front end developer/designer intern, helped Torneo build mobile-responsive blog and sign-in/up pages<br />
                            - Technologies: Javascript (ES5/ES6), HTML5, CSS3, Vue, Vuex, Vue-Router, Quill.js<br />
                            - Link: <a href="https://www.torneo.ca/info/company" target="_blank" rel="noopener noreferrer">visit company</a>
                        </p>
                    </div>
                </li>
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Program Engineer At Ford China</p>
                        <p className="exp-info">
                            - Duration: July 2014 - May 2016<br />
                            - I worked for Ford Motor Company (China) as an engine program engineer. Worked with cross-functional teams to deliver project timing plans, DV bill of materials, localization parts list, change management, supplier sourcing and RPQs. I hosted weekly team meetings and participated in test trouble shootings<br />
                            - Skillsets: Engine design and stucture, CAD, project management, team communication, MS Powerpoint, Excel, Sharepoint<br />
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}