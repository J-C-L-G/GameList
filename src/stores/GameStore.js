"use strict";

import Store from "./Store";
import Dispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../constants/actionTypes";

class GameStore extends Store{
    constructor(){
        super();
        this.games = [];
    }

    addGame(game){
        this.games.push(game);
    }

    updateGame(gameUpdated){
        return this.games = this.games.map((game)=>{
            if(gameUpdated.id === game.id){
                return gameUpdated;
            }
            return game;
        });
    }

    deleteGame(game){
        return this.games = this.games.filter((gameStored)=>(game.id !== gameStored.id));
    }

    getGameById(id){
        return this.games.find((gameStored)=>(gameStored.id == id));
    }

    getAllGames(){
        return this.games;
    }
}

const gameStore = new GameStore();

/**
 * Notify the Store when an Action is Dispatched
 * to handle it if it cares.
 */
Dispatcher.register((action) => {

    console.log(`GameStore registered callback with AppDispatcher executed, action received: ${action.actionType}`);
    switch (action.actionType){

        case actionTypes.INITIALIZE: {
            action.initialData.games.forEach((gameFromService) => (gameStore.addGame(gameFromService)));
            console.log(`Action: ${actionTypes.INITIALIZE} emit a change on GameStore!`);
            gameStore.emitChange();
            break;
        }
        case actionTypes.CREATE_GAME: {
            gameStore.addGame(action.game);
            console.log(`Action: ${actionTypes.CREATE_GAME} emit a change on GameStore!`);
            gameStore.emitChange();
            break;
        }
        case actionTypes.UPDATE_GAME: {
            gameStore.updateGame(action.game);
            console.log(`Action: ${actionTypes.UPDATE_GAME} emit a change on GameStore!`);
            gameStore.emitChange();
            break;
        }
        case actionTypes.DELETE_GAME: {
            gameStore.deleteGame(action.game);
            console.log(`Action: ${actionTypes.DELETE_GAME} emit a change on GameStore!`);
            gameStore.emitChange();
            break;
        }
        default:{
            console.log(`GameStore doesn't care about the action received: ${action.actionType}`);
        }
    }
    
});

export default gameStore;