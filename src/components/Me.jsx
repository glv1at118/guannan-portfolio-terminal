import React from 'react';
import '../styles/me.css';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selfIntroString: "",
            timer: -1
        };
    }

    componentDidMount() {
        let str = '"As an experienced developer who is a core part my project teams, I deliver high quality codes which meet or exceed the requirements. I help you solve problems with web & mobile app development, performance improvements, bug fixing, and even more. My soft skills also guarantee me to output the maximum productivity as well as to support teammates when they need help."';
        let strArr = str.split("");
        let i = 0;
        let timer = setInterval(() => {
            let currCharStr = strArr[i];
            this.setState({
                selfIntroString: this.state.selfIntroString + currCharStr
            });
            if (i === strArr.length - 1) {
                clearInterval(this.state.timer);
            } else {
                i++;
            }
        }, 5);
        this.setState({
            timer: timer
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (
            <div className="nes-container with-title is-rounded" id="me">
                <p className="title">About Guannan Lyu</p>
                <div id="my-img-frame">
                    {/* <img src={require("../images/me.jpg")} alt="" height="100%" /> */}
                </div>
                <p id="self-description">{this.state.selfIntroString}</p>
            </div>
        );
    }
}