"use strict";

import React from "react";

class About extends React.Component{
    render(){
        const stacks = ["React", "React Router", "Webpack 2", "Flux", "localStorage"];
        return (
            <div>
                <p>Technology Stack</p>
                <ul>{stacks.map( (element, index) => {return <li key={index}>{element}</li>})}</ul>
            </div>
        );
    }
}

export default About;