import React, { Component } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src="../public/images/ironhack-logo.svg" alt="logo" />
        <img src="../public/images/menu-top.svg" alt="menu-top" />
      </div>
      <div className="header">
        <h1>
          Say hello to <br /> ReactJs
        </h1>
      </div>
      <div className="subheader">
        <p>
          You Will Learn a Frontend <br />
          framework from scratch, to <br />
          became a Ninja Developer.
        </p>
      </div>
      <div className="button">
        <a
          className="waves-effect waves-light btn-large white black-text"
          href="#"
        >
          Awesome!
        </a>
      </div>
      <div className="image">
        <img src="../public/images/icon1" alt="description of reactJs" />
        <img src="../public/images/icon2" alt="description of reactJs" />
        <img src="../public/images/icon3" alt="description of reactJs" />
        <img src="../public/images/icon4" alt="description of reactJs" />
      </div>
    </div>
  );
}

export default App;
