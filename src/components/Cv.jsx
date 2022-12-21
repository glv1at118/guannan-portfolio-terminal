import React from 'react';
import '../styles/cv.css';

export default class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeUrl: "https://github.com/glv1at118/professional-docs/blob/master/Software%20Developer%20Resume_2022.5.1_Guannan.pdf"
        };
    }
    render() {
        return (
            <div id="cv" className="nes-container is-rounded">
                <i className="far fa-file"></i>
                <a href={this.state.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <span className="cv-desktop">See My Resume</span>
                    <span className="cv-mobile">Resume</span> <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        );
    }
}