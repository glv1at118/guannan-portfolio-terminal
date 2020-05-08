import React from 'react';
import Help from './Help';
import Unrecognized from './Unrecognized';
import Me from './Me';
import Education from './Education';
import Contact from './Contact';
import Cv from './Cv';
import Experience from './Experience';
import MyApps from './MyApps';


import store from '../redux/store.js';

export default class CurrentListedItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        store.getState().guannanStack.map((currItem, index) => (
                            <li key={index}>{currItem}</li>
                        ))
                    }
                </ul>
            </div>
            // <ul>
            //     <li>
            //         <Contact></Contact>
            //     </li>
            //     <li>
            //         <Education></Education>
            //     </li>
            //     <li>
            //         <Me></Me>
            //     </li>
            //     <li>
            //         <Unrecognized></Unrecognized>
            //     </li>
            //     <li>
            //         <Help></Help>
            //     </li>
            //     <li>
            //         <Cv></Cv>
            //     </li>
            // </ul>
        );
    }
}