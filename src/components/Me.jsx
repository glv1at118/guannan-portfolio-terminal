import React from 'react';
import '../styles/me.css';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutText: "As an experienced developer who is a core part of my project teams, I deliver high quality codes which meet or exceed the requirements. I help you solve problems with front end, back end, and mobile app development, performance boosting, defect fixing, and even more. My soft skills also guarantee me to output the maximum productivity as well as to support teammates when they need help.",
            roleText: "Software Developer - Spring | ASP.NET Core | Angular"
        };
    }
    render() {
        return (
            <div className="nes-container with-title is-rounded" id="me">
                <p className="title">About Myself</p>
                <p className="self-description">What Do I Do: {this.state.roleText}</p>
                <p className="self-description">"{this.state.aboutText}"</p>
            </div>
        );
    }
}