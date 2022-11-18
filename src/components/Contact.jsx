import React from 'react';
import "../styles/contact.css";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitHubUrl: "https://github.com/glv1at118",
            linkedInUrl: "https://www.linkedin.com/in/guannan-l-001133127",
            formspreeActionUrl: "https://formspree.io/f/mrgygjal",
        };
    }
    render() {
        return (
            <div id="contact">
                <div id="contact-links" className="nes-container is-rounded">
                    <i className="nes-icon github"></i>
                    <a href={this.state.gitHubUrl} target="_blank" rel="noopener noreferrer">
                        Github <i className="fas fa-external-link-alt"></i>
                    </a><br />
                    <i className="nes-icon linkedin"></i>
                    <a href={this.state.linkedInUrl} target="_blank" rel="noopener noreferrer">
                        LinkedIn <i className="fas fa-external-link-alt"></i>
                    </a><br />
                </div>
                <div id="divider-text">Or leave me an online message:</div>
                <div id="online-msg">
                    <form action={this.state.formspreeActionUrl} method="POST" target="_blank" rel="noopener noreferrer">
                        <div className="part1">
                            <input type="email" name="sender_email" placeholder="Email..." className="nes-input" />
                        </div>
                        <div className="part2">
                            <textarea name="sender_msg" placeholder="Message..." className="nes-textarea"></textarea>
                        </div>
                        <div className="part3">
                            <button type="submit" className="nes-btn is-warning">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}