import React from 'react';
import {Button, HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import axios from 'axios';
import '../css/Signup.css';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      age: null,
      skinTone: '',
      undertone: '',
      skinType: '',
      skinSens: false,
      climate: '',
      enviroment: '',
      skinConcerns: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/signup', {
      username: this.state.username,
      password: this.state.password,
      age: this.state.age,
      skinTone: this.state.skinTone,
      undertone: this.state.undertone,
      skinType: this.state.skinType,
      skinSens: this.state.skinSens,
      climate: this.state.climate,
      enviroment: this.state.enviroment,
      skinConcerns: this.state.skinConcerns
    })
      .then((resp) => {
        console.log('RESPONSE:', resp);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              id='email'
              value={this.state.id}
              onChange={this.handleChange}
              type='email'
            />
          </FormGroup>
          <FormGroup controlId='username' bsSize='large'>
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              id='username'
              value={this.state.id}
              onChange={this.handleChange}
              type ='username'
            />
          </FormGroup>
          <FormGroup controlId='password' bsSize='large'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              autoFocus
              id='password'
              value={this.state.id}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>
          <FormGroup controlId='confirmPassword' bsSize='large'>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              autoFocus
              id='confirmPassword'
              value={this.state.id}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>
          <FormGroup controlId='age' bsSize='large'>
            <ControlLabel>Age</ControlLabel>
            <FormControl
              autoFocus
              id='age'
              value={this.state.id}
              onChange={this.handleChange}

            />
          </FormGroup>
          <FormGroup controlId='skinTone' bsSize='large'>
            <ControlLabel>Skin Tone</ControlLabel>
            <FormControl
              componentClass='select'
              id='skinTone'
              onChange={this.handleChange}
            >
              <option>(Choose Your Skin Tone)</option>
              <option value={this.state.id}>Fair</option>
              <option value={this.state.id}>Light</option>
              <option value={this.state.id}>Medium</option>
              <option value={this.state.id}>Dark</option>
              <option value={this.state.id}>Deep</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='undertone' bsSize='large'>
            <ControlLabel>Undertone</ControlLabel>
            <FormControl
              componentClass='select'
              id='undertone'
              onChange={this.handleChange}
            >
              <option>(Choose Your Undertone)</option>
              <option value={this.state.id}>Cool</option>
              <option value={this.state.id}>Neutral</option>
              <option value={this.state.id}>Warm</option>
              <option value={this.state.id}>Olive</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='skinType' bsSize='large'>
            <ControlLabel>Skin Type</ControlLabel>
            <FormControl
              componentClass='select'
              id='skinType'
              onChange={this.handleChange}
            >
              <option>(Choose Your Skin Type)</option>
              <option value={this.state.id}>Oily</option>
              <option value={this.state.id}>Dry</option>
              <option value={this.state.id}>Combination</option>
              <option value={this.state.id}>Normal</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='skinSens' bsSize='large'>
            <ControlLabel>Sensitive Skin?</ControlLabel>
            <FormControl
              componentClass='select'
              id='skinSens'
              onChange={this.handleChange}
            >
              <option>(Choose)</option>
              <option value={this.state.id}>True</option>
              <option value={this.state.id}>False</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='climate' bsSize='large'>
            <ControlLabel>Climate</ControlLabel>
            <FormControl
              componentClass='select'
              id='climate'
              onChange={this.handleChange}
            >
              <option>(Choose Your Climate)</option>
              <option value={this.state.id}>Humid</option>
              <option value={this.state.id}>Dry</option>
              <option value={this.state.id}>Neutral</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='enviroment' bsSize='large'>
            <ControlLabel>Enviroment</ControlLabel>
            <FormControl
              componentClass='select'
              id='enviroment'
              onChange={this.handleChange}
            >
              <option>(Choose Your Enviroment)</option>
              <option value={this.state.id}>Urban</option>
              <option value={this.state.id}>Rural</option>
              <option value={this.state.id}>Mixed</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId='skinConcerns' bsSize='large'>
            <ControlLabel>Skin Concerns</ControlLabel>
            <FormControl
              componentClass='select'
              id='skinConcerns'
              onChange={this.handleChange}
            >
              <option>(Choose Your Skin Concerns)</option>
              <option value={this.state.id}>Acne</option>
              <option value={this.state.id}>Aging</option>
              <option value={this.state.id}>Rosacea</option>
              <option value={this.state.id}>Eczema</option>
              <option value={this.state.id}>Psoriasis</option>
              <option value={this.state.id}>Dark Circles</option>
              <option value={this.state.id}>Puffiness</option>
              <option value={this.state.id}>Dark Spots</option>
            </FormControl>
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }

}
export default Signup;
