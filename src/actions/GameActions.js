"use strict";

import Dispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../constants/actionTypes";
import API from "../api/API";

const GameActions = {

    createGame(game){
        return API.addGame(game)
            .then((gameCreated)=>{
                console.log(`Action: ${actionTypes.CREATE_GAME} Dispatched!`);
                
                /*** Action Creator ***/
                Dispatcher.dispatch({
                    actionType: actionTypes.CREATE_GAME,
                    game: gameCreated
                });

            }, (error)=>{});
    },

    updateGame(game){
        return API.updateGame(game)
            .then((gameUpdated)=>{
                console.log(`Action: ${actionTypes.UPDATE_GAME} Dispatched!`);

                /*** Action Creator ***/
                Dispatcher.dispatch({
                    actionType: actionTypes.UPDATE_GAME,
                    game: gameUpdated
                });

            }, (error)=>{});
    },
    
    deleteGame(game){
        return API.deleteGame(game)
            .then((deletedGame)=>{
                console.log(`Action: ${actionTypes.DELETE_GAME} Dispatched!`);

                /*** Action Creator ***/
                Dispatcher.dispatch({
                    actionType: actionTypes.DELETE_GAME,
                    game: deletedGame
                });
                
            }, (error)=>{});
    }
};

export default GameActions;