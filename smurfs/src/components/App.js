import React, { Component } from "react";
import "./App.css";

// import connect to the store
import { connect } from "react-redux"

// import actions
import { getSmurfData, removeSmurf } from "../actions"

// import components
import AddSmurf from "./AddSmurf"
import Smurfs from "./Smurfs"


class App extends Component {

  componentDidMount() {
    this.props.getSmurfData()
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
        <Smurfs smurfs={this.props.smurfs} remove={this.props.removeSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfData, removeSmurf }
)(App);
