import React from 'react';
import HALO from 'vanta/dist/vanta.halo.min.js';
import Terminal from './components/Terminal.jsx';
import GitCat from './components/GitCat.jsx';
import "./styles/app.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    // this.vantaEffect = HALO({
    //   el: this.vantaRef.current,
    //   mouseControls: true,
    //   touchControls: true,
    //   backgroundColor: 0x42400,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   amplitudeFactor: 2.50,
    //   size: 2.00
    // });
  }
  componentWillUnmount() {
    // if (this.vantaEffect) {
    //   this.vantaEffect.destroy();
    // }
  }
  render() {
    return (
      <div ref={this.vantaRef} className="app">
        <GitCat></GitCat>
        <Terminal></Terminal>
      </div>
    );
  }
}

/*
Lesson's Learnt: 原来我把 GitCat 组件里的代码，都直接写在 App 组件中了。
Terminal 组件我设计成一旦组件更新，就自动把滚动条调到最后。
因为之前 GitCat 里的代码都写在 App 中，所以 App 中有 state。而 state 会经常变化。
这样一来，App 中的 state 一变，就会调用 render 函数。而 render 函数的调用，就会导致
Terminal 这个组件受到影响。虽然 Terminal 组件里的内容并没有发生任何变化，但是因为
它是被 App 渲染的，所以 App 的 render 调用就会促使 Terminal 组件更新。
也即 Terminal 组件里的 componentDidUpdate 方法会调用。这就造成了 bug，
每次猫弹出对话框时，Terminal 的滚动条都会被拉到底部。这不是我想要的。

解决办法就是把 GitCat 的代码抽离出来，单独形成一个 GitCat 组件，而不是混在 App 当中。
这样 App 中就不需要有 state了，GitCat代码需要的 state 放到了它自己内部。所以，
每次 GitCat 组件状态更新，都是它自己的事情。App 没有 state更不涉及到更新，所以自然
App 不会调用自己的 render 函数（而 GitCat 则是每次更新时调用自己的 render 函数）。
App 不会更新，自然 Terminal 组件就不再受影响了。Terminal 的 componentDidUpdate
也不会被调用，自然不会出现上述的 bug 了。
*/