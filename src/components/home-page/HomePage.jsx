"use strict";

import React from 'react';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>React JS</h1>
                <p><i className="fa fa-hand-peace-o fa-6"></i> Simple web application that allows to save your game list</p>
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a7/React-icon.svg" />
            </div>
        );
    }
}

export default HomePage;