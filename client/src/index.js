import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Home from './pages/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import Filter from './pages/Filter'
import { BrowserRouter, Routes, Route, HashRouter as Router } from 'react-router-dom'
// import Messenger from './pages/messenger/Messenger';
// import { Routes } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/">
            <Routes>
                <Route exact path="/" element={<App />}>
                <Route index='true' element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/filter" element={<Filter/>}/>
                </Route>
            </Routes>
         </Router>
    </React.StrictMode>,
    document.getElementById("root")
)