import React from 'react';
import '../styles/education.css';

export default class Education extends React.Component {
    render() {
        return (
            <ul>
                <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <div className="school-img-frame">
                            <img src={require("../images/uoft.png")} alt="" height="100%" />
                        </div>
                        <p className="school-info">
                            - University of Toronto (St.Geroge Campus)<br />
                            - Duration: 2016 - 2018<br />
                            - Master's Degree of Engineering (MIE)<br />
                            - Some Courses: System Design and Engineering, Advanced Manufacturing, Failure Analysis<br />
                        </p>
                    </div>
                </li>
                <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <div className="school-img-frame">
                            <img src={require("../images/jilin.png")} alt="" height="100%" />
                        </div>
                        <p className="school-info">
                            - Jilin University, China<br />
                            - Duration: 2010 - 2014<br />
                            - Bachelor's Degree of Engineering (ME)<br />
                            - Some Courses: Mechanical Design, Machine Theory, Computer Fundamentals, Computer Network Technology, C Programming Language<br />
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}