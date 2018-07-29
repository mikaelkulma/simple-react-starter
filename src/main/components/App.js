import React from "react";
import { hot } from "react-hot-loader";
import {connect} from "react-redux"

const App = (props) => (
  <div>
    <h1>Hello world!</h1>
    {props.items.map(item => <div key={Math.random()}>{item}</div>) }
  </div>
);

const mapStateToProps = (state) => ({
  items : state.items
})

export default connect(mapStateToProps)(hot(module)(App));
