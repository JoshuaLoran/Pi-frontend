import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ActionCable from 'actioncable'

// let LED = new Gpio(4, 'out');


export default class App extends Component {

  componentDidMount(){
    const cable = ActionCable.createConsumer('wss://agile-reef-99245.herokuapp.com/cable')
    this.sub = cable.subscriptions.create('DevicesChannel', {
      recieved: this.handleData
    })
  }

  handleData = (data) => {
    console.log(data)
  }

    clickHandle(){
      this.sub.send( {commands: "from the pi", id: 1})
    }



  // var blinkInterval = setInterval(blinkLED, 250)
  // function blinkLED(){
  //  if (LED.readSync() === 0) {
  //    LED.writeSync(1);
  //  } else {
  //    LED.writeSync(0);
  //  }
  // }

  // function endBlink() {
  //   clearInterval(blinkInterval);
  //   LED.writeSync(0);
  //   LED.unexport();
  // }

  // setTimeout(endBlink, 5000);
  render(){
  return (
    <div className="App">
      <button onClick={this.clickHandle}>submit</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

