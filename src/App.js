import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
// import { INCREMENT_VALUE, DECREMENT_VALUE } from './Redux/constraint';
import {
  increment,
  decrement,
  incrementValue,
  decrementValue,
} from "./Redux/action";

function App({
  counter,
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>REDUX SAGA IMPLEMENTATION</code>
        </p>
        <button type="button" onClick={() => increment()}>
          INCREMENT
        </button>
        <button type="button" onClick={() => incrementAsync()}>
          INCREMENT ASYNC
        </button>
        <h1>
          Counter <code>{counter}</code>
        </h1>
        <button type="button" onClick={() => decrement()}>
          DECREMENT
        </button>
        <button type="button" onClick={() => decrementAsync()}>
          DECREMENT ASYNC
        </button>
      </header>
    </div>
  );
}
function mapStateToProps({ global }) {
  return {
    counter: global.counter,
  };
}
function mapDispathToProps(dispatch) {
  return {
    incrementAsync: () => dispatch(incrementValue()),
    decrementAsync: () => dispatch(decrementValue()),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(App);
