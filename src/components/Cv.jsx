import React from 'react';
import '../styles/cv.css';

export default class Cv extends React.Component {
    render() {
        return (
            <div id="cv" className="nes-container is-rounded">
                <i className="far fa-file"></i>
                <a href="https://drive.google.com/file/d/1eksTvPJr6Wz5KonIurIFCWwIUaJR-71Y/view" target="_blank" rel="noopener noreferrer">
                    see my resume <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        );
    }
}