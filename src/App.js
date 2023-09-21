import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.jsx';
import QuakeTracker from './QuakeTracker.js';
import QuakeList from './components/QuakeList.js';
import Home from './Home.js'


{/*<!---------------------------- Start of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------------------------------------------------------------------->*/ }
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
                    </Route>
                </Routes>
            </BrowserRouter>
            <div>
                <Header />
                

            
            </div>
        </>
    )
}
}

export default App;


