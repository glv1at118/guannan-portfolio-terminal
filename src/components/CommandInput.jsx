import React from 'react';
import "../styles/commandinput.css";

export default class CommandInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCommand: ""
        };
    }
    render() {
        return (
            <div id="command-input">
                >&nbsp;
                <input type="text" spellCheck="false" placeholder="commands..."/>
            </div>
        );
    }
}
