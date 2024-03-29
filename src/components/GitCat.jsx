import React from 'react';
import '../styles/gitcat.css';

export default class GitCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catClass: "nes-octocat",
            chatMsgList: [
                "Hi, how are you today?",
                "Feeling a bit messy? Type 'cls'.",
                "How do you like this design?",
                "I am Guannan's robot cat.",
                "More functions to be constructed...",
                "Have some feedback? Type 'con'.",
                "Welcome to my portfolio page.",
                "Get lost? Type 'help' to see commands...",
                "Life is a journey of growing."
            ],
            chatBubbleVisibility: "hidden",
            randomMsgId: 0,
            timer: -1
        };
    }
    componentDidMount() {
        setTimeout(() => {
            let timer = setInterval(() => {
                let randomIndex = Math.floor(this.state.chatMsgList.length * Math.random());
                this.setState({
                    randomMsgId: randomIndex,
                    chatBubbleVisibility: "visible"
                });
                setTimeout(() => {
                    this.setState({
                        chatBubbleVisibility: "hidden"
                    });
                }, 4000);
            }, 10000);
            this.setState({
                timer: timer
            });
        }, 4000);
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    handleEnter = () => {
        this.setState({
            catClass: "nes-octocat animate"
        });
    }
    handleLeave = () => {
        this.setState({
            catClass: "nes-octocat"
        });
    }
    getRidOfBubble = () => {
        this.setState({
            chatBubbleVisibility: "hidden"
        });
    }
    render() {
        return (
            <div id="guannan-cat-container" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                <div id="cat-dialog" className="nes-container is-rounded" style={{ visibility: this.state.chatBubbleVisibility }} onClick={this.getRidOfBubble}>{this.state.chatMsgList[this.state.randomMsgId]}</div>
                <i className={this.state.catClass}></i>
            </div>
        );
    }
}