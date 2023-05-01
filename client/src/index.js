import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import Messenger from './pages/messenger/Messenger';
// import { Routes } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>

        <App />
{/* <Routes>
        <Route path="/messenger" element={<Messenger/>} />
        </Routes> */}
    </React.StrictMode>,
    document.getElementById("root")
)