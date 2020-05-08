import React from 'react';
import Help from './Help';
import Unrecognized from './Unrecognized';
import Me from './Me';
import Education from './Education';
import Contact from './Contact';

export default class CurrentListedItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li>
                    {/* <Contact></Contact>
                    <Education></Education>
                    <Me></Me>
                    <Unrecognized></Unrecognized>
                    <Help></Help> */}
                </li>
            </ul>
        );
    }
}