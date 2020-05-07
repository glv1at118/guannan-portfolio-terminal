import React from 'react';
import '../styles/unrecognized.css';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="unrecognized">> Sorry, but your command has drifted to outer space...&nbsp;
                <i className="fas fa-rocket"></i>
            </div>
        );
    }
}