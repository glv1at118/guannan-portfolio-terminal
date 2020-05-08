import React from 'react';
import HALO from 'vanta/dist/vanta.halo.min.js';
import Terminal from './components/Terminal.jsx';
import "./styles/app.css";

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.vantaRef = React.createRef();
  // }
  // componentDidMount() {
  //   this.vantaEffect = HALO({
  //     el: this.vantaRef.current,
  //     mouseControls: true,
  //     touchControls: true,
  //     backgroundColor: 0x42400,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     amplitudeFactor: 2.50,
  //     size: 2.00
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
