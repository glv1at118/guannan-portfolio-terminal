import React from 'react';
import "../styles/contact.css";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="contact">
                <div id="contact-links" className="nes-container is-rounded">
                    <i class="fab fa-github"></i>
                    <a href="https://github.com/glv1at118" target="_blank">
                        visit <i class="fas fa-external-link-alt"></i>
                    </a><br />

                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://www.linkedin.com/in/guannan-lyu-001133127/" target="_blank">
                        visit <i class="fas fa-external-link-alt"></i>
                    </a><br />

                    <i class="far fa-envelope"></i>
                    <a href="mailto:guannanlv@gmail.com" target="_blank">
                        guannanlv@gmail.com <i class="fas fa-external-link-alt"></i>
                    </a><br />

                    <i class="fas fa-mobile-alt"></i>
                    <a href="#" target="_blank" className="last-anchor">
                        289-639-3269 <i class="fas fa-external-link-alt"></i>
                    </a><br />
                </div>
                <div id="divider-text">Or leave an online message:</div>
                <div id="online-msg">
                    <form action="https://formspree.io/mrgygjal" method="POST" target="_blank">
                        <div className="part1">
                            <input type="text" name="_replyto" placeholder="What's your email?" className="nes-input" />
                        </div>
                        <div className="part2">
                            <textarea name="message" placeholder="What's your message?" className="nes-textarea"></textarea>
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