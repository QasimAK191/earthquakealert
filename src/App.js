import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-dom';
import './App.css';

import Header from './components/Header';
import QuakeTracker from './QuakeTracker.js';


{/*<!---------------------------- Start of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------------------------------------------------------------------->*/ }
function App() {


    return (
      <div>
            <QuakeTracker />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<QuakeTracker />}/>
                        <Route path="quake-tracker" element={<QuakeTracker />} />
                    </Route>
                </Routes>
            </BrowserRouter>
      </div>
    )
}

export default App;


