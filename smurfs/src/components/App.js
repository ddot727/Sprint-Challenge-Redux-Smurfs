import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: '',
    }
  }

   componentDidMount() {
    this.props.getSmurfs();
  }

   changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

   submitHandler = e => {
    this.props.addSmurf(this.state.smurf);
    this.setState({ 
      smurf: {
        name: '',
        age: '',
        height: ''
      }});
  };
  
  
  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => (
          <div>
            <h1>{smurf.name}</h1>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);