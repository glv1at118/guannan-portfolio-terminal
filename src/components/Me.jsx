import React from 'react';
import '../styles/me.css';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nes-container with-title is-rounded" id="me">
                <p className="title">About Guannan Lyu</p>
                <div id="my-img-frame">
                    <img src={require("../images/me.jpg")} alt="" height="100%"/>
                </div>
                <p id="self-description">"Hi! Welcome to my website. I am a self-educated software developer skilled in front end programming, but also have an intense passion in backend development. I like learning new technologies and creating fun stuff. Apart from coding, I also enjoy games modding, cooking, and reading."</p>
            </div>
        );
    }
}