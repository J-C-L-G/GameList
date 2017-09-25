"use strict";

import GameData from "./GameData";

const loadFromStorage = () => {
        let data = window.localStorage.getItem("myGames");
            if(data){
                try{
                    console.log(data);
                    data = window.JSON.parse(data);
                }catch(e){
                    data = null;
                }
            }
        return data || GameData;
    },
    persistToStorage = (data) => {
        window.localStorage.setItem("myGames",window.JSON.stringify(data));
    };

let data = loadFromStorage(),
    games = data.games,
    id = data.index;

const promiseSimulator = (data) => {
    return new Promise((resolve, reject)=>{
        if(data){
            window.setTimeout(()=>{
                resolve(data)
            },300);
        }else{
            window.setTimeout(()=>{
                reject(null);
            },100);
        }
    });
};

const addGame = (newGame) => {
    newGame.id = id++;
    games = games.concat(newGame);
    persistToStorage({games, index: id});
    return promiseSimulator(newGame);
};

const updateGame = (game) => {
    for(let index = 0; index < games.length; index++ ){
        if(game.id === games[index].id){
            games[index] = game;
            persistToStorage({games, index: id});
            return promiseSimulator(game);
        }
    }
};

const deleteGame = (game) => {
    games = games.filter((gameStored)=>(game.id !== gameStored.id));
    persistToStorage({games, index: id});
    return promiseSimulator(game);
};

const getAllGames = () => {
    return promiseSimulator(games);
};

const getGameById = (id) => {
    return promiseSimulator(games.find((gameStored)=>(gameStored.id == id)));
};

export default {
    addGame,
    updateGame,
    deleteGame,
    getAllGames,
    getGameById
};