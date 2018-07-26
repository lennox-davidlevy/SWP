import React from 'react';
import ReactDOM from 'react-dom';
import {HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import axios from 'axios';
import Signup from './components/Signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render () {
    return (<div>
      <Signup/>
    </div>);
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
