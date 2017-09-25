"use strict";

import React from "react";
import { Router, Route, Redirect, IndexRoute, hashHistory, browserHistory } from 'react-router'

import App from "../components/app/App.jsx";
import HomePage from "../components/home-page/HomePage.jsx";
import About from "../components/about/About.jsx";
import GamePage from "../components/game-page/GamePage.jsx";
import ManageGamesPage from "../components/manage-games-page/ManageGamesPage.jsx";
import NotFoundPage from "../components/not-found-page/NotFoundPage.jsx";

const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="about" component={About} />
            <Route path="games" component={GamePage}/>
            <Route path="manage-games/:id" component={ManageGamesPage}/>
            <Route path="manage-games" component={ManageGamesPage} />
            <Redirect from="about-us" to="about" />
            <Redirect from="game-list" to="games" />
            <Redirect from="about-us/*" to="about" />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);

export default Routes;