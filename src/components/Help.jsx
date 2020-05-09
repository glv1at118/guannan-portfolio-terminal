import React from 'react';
import '../styles/help.css';

import Me from './Me';
import Cv from './Cv';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import MyApps from './MyApps';

import { componentEnterStack, clearStack } from '../redux/actions.js';
import { connect } from 'react-redux';

class Help extends React.Component {
    showMe = () => {
        this.props.componentEnterStack(<Me></Me>);
    }
    showCv = () => {
        this.props.componentEnterStack(<Cv></Cv>);
    }
    showExp = () => {
        this.props.componentEnterStack(<Experience></Experience>);
    }
    showMyApps = () => {
        this.props.componentEnterStack(<MyApps></MyApps>);
    }
    showCon = () => {
        this.props.componentEnterStack(<Contact></Contact>);
    }
    showEdu = () => {
        this.props.componentEnterStack(<Education></Education>);
    }
    showHelp = () => {
        this.props.componentEnterStack(<Help></Help>);
    }
    clearTerminal = () => {
        this.props.clearStack();
    }
    render() {
        return (
            <ul id="my-help">
                <li className="help-title">Available commands (type or click):</li>
                <li className="help-item">
                    <span className="help-cmd">'me'</span>: Brief introduction of me. <button type="button" className="nes-btn is-primary" onClick={this.showMe}>ME</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'edu'</span>: My education history. <button type="button" className="nes-btn is-success" onClick={this.showEdu}>EDU</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'app'</span>: Some fun apps I created. <button type="button" className="nes-btn is-warning" onClick={this.showMyApps}>APP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'exp'</span>: Experience as a developer. <button type="button" className="nes-btn is-error" onClick={this.showExp}>EXP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cv'</span>: My curriculum vitae. <button type="button" className="nes-btn" onClick={this.showCv}>CV</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'con'</span>: Want to contact? Here it goes. <button type="button" className="nes-btn is-primary" onClick={this.showCon}>CON</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'help'</span>: See a list of commands. <button type="button" className="nes-btn is-success" onClick={this.showHelp}>HELP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cls'</span>: Clear the terminal. <button type="button" className="nes-btn is-warning" onClick={this.clearTerminal}>CLS</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'???'</span>: ???????????????? <button type="button" className="nes-btn is-primary">???</button>
                </li>
            </ul>
        );
    }
}

export default connect(null, {
    componentEnterStack: componentEnterStack,
    clearStack: clearStack
})(Help);