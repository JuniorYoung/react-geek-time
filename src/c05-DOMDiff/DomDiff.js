import React from "react";
import PropTypes from "prop-types";
import './domdiff.css';

export default class extends React.PureComponent {

  constructor(props) {
    super(props);
    this.btns = ['shape1', 'shape2', 'shape3', 'shape4', 'shape5', 'shape6', 'clear'];
    this.state = {
      btn: 'shape1'
    };
  }

  btnClickHandler(name) {
    if(this.state.btn !== name) {
      this.setState({
        btn: name
      });
    }
  }

  render() {
    return (
    <div>
      <a href="https://supnate.github.io/react-dom-diff/index.html" target="_blank">
        https://supnate.github.io/react-dom-diff/index.html
      </a>
      <div>
        {this.btns.map((btn) => <button key={btn} onClick={() => {this.btnClickHandler(btn)}} >{btn}</button>)}
      </div>
      <div style={{position: "relative"}}>
        <Wrapper shape={this.state.btn} />
      </div>
    </div>
    );
    
  }
}

function createComponent(name) {
  class _MyNode extends React.Component{
    constructor(props) {
      super(props);
      console.log(name + ' is created.');
    }
    componentDidMount() {
      console.log(name + ' did mount.');
    }
    
    componentWillUnmount() {
      console.log(name + ' will unmount.');
    }
    
    componentDidUpdate() {
      console.log(name + ' is updated.');
    }
    
    render() {
      return (
        <div className={'node ' + name} data-name={name}>
          {this.props.children}
        </div>
      );
    }
  }
  return _MyNode;
}

var Root = createComponent('R');
var A = createComponent('A');
var B = createComponent('B');
var C = createComponent('C');
var D = createComponent('D');

class Wrapper extends React.Component {
  static propTypes = {
    shape: PropTypes.string.isRequired
  }
  
  shape1() {
    return (
      <Root>
        <A>
          <B />
          <C />
        </A>
        <D />
      </Root>
    );
  }
  
  shape2() {
    return (
      <Root>
        <A>
          <B />
        </A>
        <D>
          <C />
        </D>
      </Root>
    );
  }
  
  shape3() {
    return (
      <Root>
        <A>
          <B>
            <C />
          </B>
        </A>
        <D />
      </Root>
    );
  }
  
  shape4() {
    return (
      <Root>
        <A>
          <B />
          <D>
            <C />
          </D>
        </A>
      </Root>
    );
  }

  shape5() {
    return (
      <Root>
        <A>
          <B key="B" />
          <C key="C" />
        </A>
      </Root>
    );
  }

  shape6() {
    return (
      <Root>
        <A>
          <C key="C" />
          <B key="B" />
        </A>
      </Root>
    );
  }
  
  render() {
    if (this[this.props.shape]) {
      return this[this.props.shape]();
    } else {
      return <Root />;
    } 
  }
}