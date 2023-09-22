import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Guide from "./Guide.js";
import QuakeTracker from "./QuakeTracker.js";
import Home from "./Home.js";
import QuakeList from './components/QuakeList'

{
  /*<!---------------------------- Start of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------------------------------------------------------------------->*/
}
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/quake-tracker" element={<QuakeTracker />} />
              <Route path="/quake-index" element={<QuakeList />} />
              <Route path="/quake-guide" element={<Guide />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <div>
          <Header />
        </div>
      </>
    );
  }
}

export default App;
