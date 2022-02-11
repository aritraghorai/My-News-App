import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  constructor() {
    super();
    this.state = {
      mode: "dark",
      catagory: "sports",
      progress: 0,
    };
  }
  changeMode = () => {
    this.setState({ mode: this.state.mode === "dark" ? "light" : "dark" });
  };
  chageCatagory = (catagory) => {
    this.setState({ catagory: catagory });
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <NavBar mode={this.state.mode} changeMode={this.changeMode} />
        <LoadingBar
          color={this.state.mode === "dark" ? "white" : "black"}
          height={3}
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                country={"in"}
                key={"general"}
                catagory={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                key={"business"}
                country={"in"}
                catagory={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                key={"entertainment"}
                mode={this.state.mode}
                country={"in"}
                catagory={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                key={"science"}
                country={"in"}
                catagory={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                key={"sports"}
                country={"in"}
                catagory={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                country={"in"}
                key={"technology"}
                catagory={"technology"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                pageSize={12}
                mode={this.state.mode}
                key={"health"}
                country={"in"}
                catagory={"health"}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
