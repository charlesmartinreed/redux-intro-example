import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

import store from "./store";

// The Provider takes the store, which holds the state
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
