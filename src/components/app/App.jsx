// Dependencies
import React from "react";
import { RouteHandler } from 'react-router'

//Styles
import "./App.scss";

//Components
import Header from "../common/Header.jsx";


const App = (props) => {
    return (
        <div className="container">
            <Header />
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    );
};

export default App;
