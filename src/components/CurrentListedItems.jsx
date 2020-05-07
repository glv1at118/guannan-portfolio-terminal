import React from 'react';
import Help from './Help';
import Unrecognized from './Unrecognized';
import Me from './Me';

export default class CurrentListedItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li>
                    {/* <Help></Help>
                    <Unrecognized></Unrecognized> */}
                    <Me></Me>
                </li>
            </ul>
        );
    }
}