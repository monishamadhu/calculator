import React, { Component } from 'react';
import Keypad from './components/KeypadComponent';
import Result from './components/ResultComponent';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  reset = () => {
    this.setState({
      result: ""
    });
  }
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    })
    /*if(this.state.result.includes('++'||'--'||'**'||'//')){
      this.setState({
        result: "ERROR"
      })
    }*/
  }
  /*??if after = we press any other number button before pressing +,-,*,/,it should appear in result space as a new set */
  /*??if we press same button +,-,*,/ twice result should show error i.e, for ++,--,//,** */


  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    }
    else if (button === "AC") {
      this.reset();
    }
    else if (button === "C") {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
    
  };
  render() {

    return (
      <div>
        <h1>Basic Calculator</h1>
        <div className="container">

          <Result result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>

    );
  }
}

export default App;
