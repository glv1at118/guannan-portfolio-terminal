import React from 'react';
import '../styles/experience.css';

export default class Experience extends React.Component {
    render() {
        return (
            <ul id="my-exp">
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Application Developer Full Stack At Accenture</p>
                        <p className="exp-info">
                            - Duration: June 2021 - Current<br />
                            - Implement and deliver story features of mobile application in an agile sprint framework, with the unit test coverage reaching 90%. Improve the performance of a sub-system by 75% in its loading time via code refactoring and optimization. Maintain production apps, fix defects, and expand existing features.<br />
                            - Technologies: C#, ASP.NET Core, EF Core, Angular, Kinvey, SQL Server, RabbitMQ, Azure, Git<br />
                        </p>
                    </div>
                </li>
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Full Stack Developer At Revature</p>
                        <p className="exp-info">
                            - Duration: Mar 2021 - Current<br />
                            - Implement story features on banking project and reimbursement system, with 15%
                            of functionalities exceeding the user expectation. Contribute backend codes to bug bounty board application, support on debugging, and unit testing.<br />
                            - Technologies: Typescript, Angular, JavaEE, Spring Framework, Hibernate, PostgreSQL, Jenkins, AWS EC2, AWS S3, AWS RDS, Git, Docker<br />
                        </p>
                    </div>
                </li>
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Software Developer At Somoplay Inc.</p>
                        <p className="exp-info">
                            - Duration: May 2020 - Dec 2020<br />
                            - Develop website landing page, admin management portal, and email template
                            system. Trouble-shoot issues on data rendering, website optimization, and fix defects.<br />
                            - Technologies: Javascript (ES5/ES6), HTML5, CSS3, Scss, Vue3, Vuex, Vue-Router, TinyMCE, Element UI<br />
                        </p>
                    </div>
                </li>
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Company Collaborator At Torneo.ca</p>
                        <p className="exp-info">
                            - Duration: Feb 2019 - Mar 2020<br />
                            - Implement stand-alone blog module components, and its content editing system. Develop website responsive sign-in/register page, and mobile navigation
                            component.<br />
                            - Technologies: Javascript (ES5/ES6), HTML5, CSS3, Vue, Vuex, Vue-Router, Quill.js<br />
                            - Link: <a href="https://www.torneo.ca/info/company" target="_blank" rel="noopener noreferrer">visit company</a>
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}