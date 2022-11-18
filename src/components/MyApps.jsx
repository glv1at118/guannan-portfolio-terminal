import React from 'react';
import '../styles/my-apps.css';

export default class MyApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appList: [
                {
                    appTitle: "Simple Trader App",
                    appUrl: "https://gitlab.com/glv1at118/simple-trade-backend",
                    appDescription: "Simple Trader is an online marketplace platform that provides a convenient way for people to buy and sell things.",
                    appTechStack: "Spring Boot, PostgreSQL, Hibernate, Angular, AWS (RDS, S3, EC2), Git."
                },
                {
                    appTitle: "Expense Reimbursement System",
                    appUrl: "https://github.com/glv1at118/expense-reimbursement-system",
                    appDescription: "Expense Reimbursement System manages the process of reimbursing employees for expenses incurred during company time.",
                    appTechStack: "Java EE, Servlet API, Tomcat, PostgreSQL, JDBC, MVC Design Pattern, JUnit, Mockito, Jackson."
                },
                {
                    appTitle: "Java National Bank",
                    appUrl: "https://github.com/glv1at118/java-national-bank",
                    appDescription: "Java National Bank is a backend banking management system which provides fruitful features for a bank user and admin.",
                    appTechStack: "Java SE, DAO Design Pattern, JDBC, JUnit, Mockito, Log4J, PostgreSQL, AWS (RDS)."
                },
                {
                    appTitle: "Student Profile Board",
                    appUrl: "https://github.com/glv1at118/student-profile-board",
                    appDescription: "Student profile board is a react application that retrieves student information from a given API and do multiple criteria searches.",
                    appTechStack: "Javascript (ES5, ES6), HTML5, CSS3, React, Redux, React-Redux."
                },
                {
                    appTitle: "Work Orders Board",
                    appUrl: "https://github.com/glv1at118/work-orders-board",
                    appDescription: "Work orders board is a react application that retrieves workers information from a given API and do search and sort.",
                    appTechStack: "Javascript (ES5, ES6), HTML5, CSS3, React, Redux, React-Redux."
                },
                {
                    appTitle: "Avoid The Bricks",
                    appUrl: "https://github.com/glv1at118/Proj-Avoid-the-Bricks",
                    appDescription: "Avoid the bricks is a dodge game. You control Tom to help him avoid the falling bricks and try to survive and long as possible. Difficulty adjustment and theme change are supported.",
                    appTechStack: "Javascript (ES5), HTML5, CSS3, jQuery, Paint.NET."
                },
            ]
        };
    }
    render() {
        return (
            <ul id="my-apps">
                {
                    this.state.appList.map(
                        (appItem, index) => {
                            return (
                                <li className="app-item" key={index}>
                                    <div className="nes-container is-rounded side-app with-title">
                                        <p className="title">
                                            <a href={appItem.appUrl} target="_blank" rel="noopener noreferrer">
                                                {appItem.appTitle} <i className="fas fa-external-link-alt"></i>
                                            </a>
                                        </p>
                                        <p className="app-info">
                                            {appItem.appDescription}<br /><br />
                                            - Technologies: {appItem.appTechStack}
                                        </p>
                                    </div>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        );
    }
}