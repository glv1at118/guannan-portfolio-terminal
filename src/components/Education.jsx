import React from 'react';
import '../styles/education.css';

export default class Education extends React.Component {
    render() {
        return (
            <ul id="my-edu">
                <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <div className="school-img-frame">
                            <img src={require("../images/uoft.png")} alt="" height="100%" />
                        </div>
                        <p className="school-info">
                            - University of Toronto (St.Geroge Campus)<br />
                            - Duration: 2016 - 2018<br />
                            - Master's Degree of Engineering (MIE)<br />
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}