import React from 'react';
import '../styles/experience.css';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceList: [
                {
                    roleAndCompany: "Business & Integration Architect Senior Analyst (Full Time) - Accenture Canada",
                    timeLine: "Jul 2022 - Present",
                    workDid: "Work with a team of talented developers to build amazing things. Contribute, learn, grow, and become better.",
                    techUsed: "ASP.NET Core, Angular, C#, Entity Framework Core, Microsoft SQL Server, Microsoft Azure, RabbitMQ, Ionic Framework"
                },
                {
                    roleAndCompany: "Application Developer Full Stack (Contract) - Accenture Canada",
                    timeLine: "Jun 2021 - Jul 2022 (1 yr 2 mos)",
                    workDid: "Implement and deliver story features of mobile application in an agile sprint framework, with the unit test coverage reaching 90%. Improve the performance of a sub-system by 75% in its loading time via code refactoring and optimization. Maintain production apps, fix defects, and expand existing features.",
                    techUsed: "ASP.NET Core, Angular, C#, Entity Framework Core, Microsoft SQL Server, Microsoft Azure, RabbitMQ, Ionic Framework"
                },
                {
                    roleAndCompany: "Full Stack Developer (Contract) - Revature",
                    timeLine: "Mar 2021 - Jul 2022 (1 yr 5 mos)",
                    workDid: "Implement story features on banking project and reimbursement system, with 15% of functionalities exceeding the user expectation. Contribute backend codes to bug bounty board application, support on debugging, unit testing, and code reviews.",
                    techUsed: "Spring Framework, Angular, Java EE, Hibernate, PostgreSQL, AWS, Git"
                },
                {
                    roleAndCompany: "Software Developer (Apprenticeship) - Somoplay Inc.",
                    timeLine: "May 2020 - Dec 2020 (8 mos)",
                    workDid: "Develop website landing page, admin management portal, and email template system. Trouble-shoot issues on data rendering, website optimization, and fix defects.",
                    techUsed: "JavaScript, Vue.js, Git"
                },
                {
                    roleAndCompany: "Software Collaborator (Apprenticeship) - Torneo",
                    timeLine: "Feb 2019 - Mar 2020 (1 yr 2 mos)",
                    workDid: "Implement stand-alone blog module components, and its content editing system. Develop website responsive sign-in/register page, and mobile navigation component.",
                    techUsed: "JavaScript, Vue.js, Git"
                },
            ]
        };
    }
    render() {
        return (
            <ul id="my-exp">
                {
                    this.state.experienceList.map((exp, index) => {
                        return (
                            <li className="exp-item" key={index}>
                                <div className="nes-container is-rounded experience with-title">
                                    <p className="title">{exp.roleAndCompany}</p>
                                    <p className="exp-info">{exp.workDid}</p>
                                    <p className="exp-info">- Duration: {exp.timeLine}</p>
                                    <p className="exp-info">- Technologies: {exp.techUsed}</p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}