import React from 'react';
import "../styles/commandinput.css";

import store from '../redux/store.js';
import { componentEnterStack, clearStack } from '../redux/actions.js';

import Contact from './Contact';
import Cv from './Cv';
import Education from './Education';
import Help from './Help';
import Me from './Me';
import Unrecognized from './Unrecognized';
import Experience from './Experience';
import MyApps from './MyApps';

export default class CommandInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCommand: ""
        };
    }
    updateCommand = (event) => {
        this.setState({
            currentCommand: event.target.value
        });
    }
    enterCommand = (event) => {
        if (event.keyCode === 13) {
            store.dispatch(componentEnterStack(`> ${this.state.currentCommand}`));
            let command = this.state.currentCommand.toLowerCase();
            switch (command) {
                case "me":
                    store.dispatch(componentEnterStack(<Me></Me>));
                    break;
                case "edu":
                    store.dispatch(componentEnterStack(<Education></Education>));
                    break;
                case "app":
                    store.dispatch(componentEnterStack(<MyApps></MyApps>));
                    break;
                case "exp":
                    store.dispatch(componentEnterStack(<Experience></Experience>));
                    break;
                case "cv":
                    store.dispatch(componentEnterStack(<Cv></Cv>));
                    break;
                case "con":
                    store.dispatch(componentEnterStack(<Contact></Contact>));
                    break;
                case "help":
                    store.dispatch(componentEnterStack(<Help></Help>));
                    break;
                case "cls":
                    store.dispatch(clearStack());
                    break;
                default:
                    store.dispatch(componentEnterStack(<Unrecognized></Unrecognized>));
                    break;
            }
            this.setState({
                currentCommand: ""
            });
        }
    }
    render() {
        return (
            <div id="command-input">
                >&nbsp;
                <input type="text" spellCheck="false" placeholder="commands..." value={this.state.currentCommand} onChange={this.updateCommand} onKeyUp={this.enterCommand} />
            </div>
        );
    }
}
