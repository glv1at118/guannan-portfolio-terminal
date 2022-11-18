import React from 'react';
import '../styles/education.css';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolTitle: "University of Toronto (2016 - 2018)",
            schoolMajor: "Master's Degree of Mechanical and Industrial Engineering (GPA 3.85)"
        };
    }
    render() {
        return (
            <ul id="my-edu">
                <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <p className="school-info">
                            {this.state.schoolTitle}
                        </p>
                        <p className="school-info">
                            {this.state.schoolMajor}
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}
