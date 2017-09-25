import React from "react";
import { Link } from 'react-router'


const Header = (props) => {
    return (
        <div className="navbar-inverse navbar navbar-default">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><i className="fa fa-gamepad"/></Link>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;