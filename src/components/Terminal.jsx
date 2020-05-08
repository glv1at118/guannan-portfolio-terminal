import React from 'react';
import "../styles/terminal.css";
import "nes.css/css/nes.min.css";
import CommandInput from './CommandInput';
import CurrentListedItems from './CurrentListedItems';

export default class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introStringGrowing: "",
            terminalLoadingEllipsis: "",
            loadingCoverStyleObj: {
                "display": "block"
            }
        };
        this.terminalRef = React.createRef();
    }
    componentDidMount() {
        // let ellipsisStr = "";
        // let timer1Stop = false;

        // let timer1 = setInterval(() => {
        //     if (ellipsisStr === "...") {
        //         ellipsisStr = "";
        //     } else {
        //         ellipsisStr += ".";
        //     }
        //     this.setState({
        //         terminalLoadingEllipsis: ellipsisStr
        //     });
        //     if (timer1Stop) {
        //         this.setState({
        //             loadingCoverStyleObj: {
        //                 "display": "none"
        //             }
        //         });
        //         clearInterval(timer1);
        //     }
        // }, 200);

        // setTimeout(() => {
        //     timer1Stop = true;
        // }, 2500);

        let greetingsStr = "> Hello! I am Guannan Lyu, welcome to my portfolio terminal. To see a list of commands, type 'help'.";
        let greetingsArr = greetingsStr.split("");
        let i = 0;
        setTimeout(() => {
            let timer2 = setInterval(() => {
                let currCharStr = greetingsArr[i];
                this.setState({
                    introStringGrowing: this.state.introStringGrowing + currCharStr
                });
                if (i === greetingsArr.length - 1) {
                    clearInterval(timer2);
                } else {
                    i++;
                }
            }, 50);
        }, 3000);
    }
    componentDidUpdate() {
        // when terminal window updates, scroll the bar to the bottom
        let terminalDOM = this.terminalRef.current;
        terminalDOM.scrollTop = terminalDOM.scrollHeight - terminalDOM.clientHeight;
    }
    render() {
        return (
            <section id="terminal" className="nes-container is-rounded" ref={this.terminalRef}>
                {/* <div id="terminal-loading-cover" style={this.state.loadingCoverStyleObj}>
                    <div id="loading-text-container" className="nes-container is-rounded">
                        Loading Terminal{this.state.terminalLoadingEllipsis}
                    </div>
                </div> */}
                <p className="terminalTitle">GUANNAN'S TERMINAL VERSION 2.077 BETA - ALL RIGHTS RESERVED</p>
                <p className="greetingsIntro">{this.state.introStringGrowing}</p>
                <CurrentListedItems></CurrentListedItems>
                <CommandInput></CommandInput>
            </section>
        );
    }
}