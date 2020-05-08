import React from 'react';
import "../styles/contact.css";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="contact">
                <div id="contact-links">
                    32132132
                </div>
                <div id="online-msg">
                    <form action="https://formspree.io/mrgygjal" method="POST" target="_blank">
                        <div className="part1">
                            <input type="text" name="_replyto" placeholder="What's your email?" className="nes-input"/>
                        </div>
                        <div className="part2">
                            <textarea name="message" placeholder="What's your message?" className="nes-textarea"></textarea>
                        </div>
                        <div className="part3">
                            <button type="submit" className="nes-btn">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}