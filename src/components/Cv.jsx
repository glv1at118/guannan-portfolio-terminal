import React from 'react';
import '../styles/cv.css';

export default class Cv extends React.Component {
    render() {
        return (
            <div id="cv" className="nes-container is-rounded">
                <i className="far fa-file"></i>
                <a href="https://drive.google.com/file/d/1812-ab_bUaHH3BKsMFegq-tk5zS-Fhb7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span className="cv-desktop">see my resume</span>
                    <span className="cv-mobile">cv</span> <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        );
    }
}