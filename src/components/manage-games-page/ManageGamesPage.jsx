"use strict";

import React from "react";
import PropTypes from "prop-types";
import GameForm from "../../components/game-form/GameForm.jsx";
import * as toastr from "toastr";
import GameActions from "../../actions/GameActions";
import gameStore from "../../stores/GameStore";


import { hashHistory } from 'react-router'

/**
 * Controller View
 */
class ManageGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            game : {
                title: "",
                cover: ""
            },
            errors : {}
        };
    }

    componentWillMount(){
        const {id} = this.props.params;
        if(id){
            this.setState({game: gameStore.getGameById(id)});
        }
    }

    isFormValid(){
        let validForm = true,
            {game, errors} = this.state;
        errors = {};

        if(game.title.length <= 3){
            errors.title = "Title must be at least 3 characters";
            validForm = false;
        }

        if(!game.cover.includes("http")){
            errors.cover = "cover must be at url";
            validForm = false;
        }

        this.setState({errors});
        return validForm;
    }

    onSave(event){
        event.preventDefault();
        if(this.isFormValid()){

            let update = ((this.state.game.id) ? 'updated':'created');

            if(this.state.game.id){
                GameActions.updateGame(this.state.game)
            }else{
                GameActions.createGame(this.state.game)
            }
            toastr.success(`Game ${this.state.game.title} was ${update}!`);
            hashHistory.push("games");
        }
    }

    onChange(event){
        const {name, value} = event.target;
        this.state.game[name] = value;
        this.setState({game: this.state.game});
    }

    render(){
        const {game, errors} = this.state;
        return (
            <GameForm game={game}
                      errors={errors}
                      onChange={this.onChange.bind(this)}
                      onSave={this.onSave.bind(this)}  />
        );
    }
}

/*
//- Using React Context
ManageGamesPage.contextTypes = {
    router: PropTypes.object.isRequired
};
*/

export default ManageGamesPage;