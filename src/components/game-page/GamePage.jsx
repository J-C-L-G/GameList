"use strict";

import React from "react";
import {Link} from "react-router";
import GameList from "../game-list/GameList.jsx";
import gameStore from "../../stores/GameStore";
import GameActions from "../../actions/GameActions";
import * as toastr from "toastr";

class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {games:[]};
        this.onChange = this._onChange.bind(this);
    }

    onDelete(game){
        GameActions.deleteGame(game);
        toastr.success(`Game ${game.title} was deleted!`);
    }

    _onChange(){
        console.log(`ChangeListener on gameStore executed!`);
        this.setState({games: gameStore.getAllGames()});
    }

    componentDidMount(){
        this.onChange();
    }
    
    componentWillMount(){
        gameStore.addChangeListener(this.onChange);
    }
    
    componentWillUnmount(){
        gameStore.removeChangeListener(this.onChange);
    }
    
    render(){
        const {games} = this.state;
        return (
            <div className="">
                <h1>Games</h1>
                <div>
                    <Link to="/manage-games" className="btn btn-primary">
                        <i className="fa fa-plus"/> Register new Game
                    </Link>
                </div>
                <br />
                <GameList games={games} onDelete={this.onDelete.bind(this)} />
            </div>
        );
    }
}

export default GamePage;