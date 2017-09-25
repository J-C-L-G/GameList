import React from "react";
import {Link} from "react-router";

const NotFoundPage = (props) => {
    return (
        <div className="well">
            <h1>404</h1>
            <Link to="/">
                <button className="btn btn-default">Homepage</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;