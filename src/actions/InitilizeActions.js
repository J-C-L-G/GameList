"use strict";

import Dispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../constants/actionTypes";
import API from "../api/API";

const InitializeAction = {

    initApp(){
        return API.getAllGames()
            .then((games)=>{
                console.log(`Action: ${actionTypes.INITIALIZE} Dispatched!`);

                /*** Action Creator ***/
                Dispatcher.dispatch({
                    actionType:actionTypes.INITIALIZE,
                    initialData: {games}
                });

            },(error)=>{});
    }
};

export default InitializeAction;