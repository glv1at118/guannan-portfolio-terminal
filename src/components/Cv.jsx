import React from 'react';
import '../styles/cv.css';

export default class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeUrl: "https://drive.google.com/file/d/1Pt13faiqOkes9vqLlVu36b6znWnZz4dU/view?usp=sharing"
        };
    }
    render() {
        return (
            <div id="cv" className="nes-container is-rounded">
                <i className="far fa-file"></i>
                <a href={this.state.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <span className="cv-desktop">see my resume</span>
                    <span className="cv-mobile">resume</span> <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        );
    }
}