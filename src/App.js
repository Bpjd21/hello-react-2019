import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Footer copyrightYear={2019} copyrightHolder="Brian Duer" />
      </div>
    );
  }
}

export default App;
