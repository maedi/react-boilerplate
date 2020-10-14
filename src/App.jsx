import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  ////
  // UI.
  ////

  render() {

    return (
      <strong>Hello</strong>
    )
  }
}

export default hot(module)(App);
