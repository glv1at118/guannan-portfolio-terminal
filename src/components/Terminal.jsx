import React from 'react';
import "../styles/terminal.css";
import "nes.css/css/nes.min.css";
import CommandInput from './CommandInput';
import CurrentListedItems from './CurrentListedItems';

export default class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introStringGrowing: ""
        };
    }
    componentDidMount() {
        let greetingsStr = "> Hello! I am Guannan Lyu, welcome to my portfolio terminal. To see a list of commands, type 'help'.";
        let greetingsArr = greetingsStr.split("");
        let i = 0;
        let timer = setInterval(() => {
            let currCharStr = greetingsArr[i];
            this.setState({
                introStringGrowing: this.state.introStringGrowing + currCharStr
            });
            console.log(i);
            if (i === greetingsArr.length - 1) {
                clearInterval(timer);
            } else {
                i++;
            }
        }, 40);
    }
    render() {
        return (
            <section id="terminal" className="nes-container is-rounded">
                <p className="terminalTitle">GUANNAN'S TERMINAL VERSION 2.077 BETA - ALL RIGHTS RESERVED</p>
                <p className="greetingsIntro">{this.state.introStringGrowing}</p>
                <CurrentListedItems></CurrentListedItems>
                <CommandInput></CommandInput>
            </section>
        );
    }
}