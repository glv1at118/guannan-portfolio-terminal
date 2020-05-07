import React from 'react';
import '../styles/help.css';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li className="help-title">Available commands (type or click):</li>
                <li className="help-item">
                    <span className="help-cmd">'me'</span>: Brief introduction of me. <button type="button" className="nes-btn is-primary">ME</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'edu'</span>: My education history. <button type="button" className="nes-btn is-success">EDU</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'app'</span>: Some fun apps I created. <button type="button" className="nes-btn is-warning">APP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'exp'</span>: Experience as a developer. <button type="button" className="nes-btn is-error">EXP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cv'</span>: My curriculum vitae. <button type="button" className="nes-btn">CV</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'con'</span>: Want to contact? Here it goes. <button type="button" className="nes-btn is-primary">CON</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'help'</span>: See a list of commands. <button type="button" className="nes-btn is-success">HELP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cls'</span>: Clear the terminal. <button type="button" className="nes-btn is-warning">CLS</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'???'</span>: ???????????????? <button type="button" className="nes-btn is-primary">???</button>
                </li>
            </ul>
        );
    }
}