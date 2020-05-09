import React from 'react';

import store from '../redux/store.js';

export default class CurrentListedItems extends React.Component {
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
        );
    }
}