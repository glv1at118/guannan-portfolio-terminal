import React from 'react';
import RINGS from 'vanta/dist/vanta.rings.min.js';
import "./styles/app.css";
import Terminal from './components/Terminal.jsx';

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.vantaRef = React.createRef();
  // }
  // componentDidMount() {
  //   this.vantaEffect = RINGS({
  //     el: this.vantaRef.current,
  //     mouseControls: true,
  //     touchControls: true,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     backgroundColor: 0xe2e2e2,
  //     color: 0x8bff00
  //   });
  // }
  // componentWillUnmount() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy();
  //   }
  // }
  render() {
    return (
      <div ref={this.vantaRef} className="app">
        <Terminal></Terminal>
      </div>
    );
  }
}
