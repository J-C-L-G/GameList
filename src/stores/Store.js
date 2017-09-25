"use strict";

import EventEmitter from "events";

const CHANGE_EVENT = "change";

class Store extends EventEmitter{
    constructor(){
        super();
    }

    emitChange(){
        console.log(`Store : emit -> ${CHANGE_EVENT}`);
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback){
        console.log(`Store : addChangeListener -> ${CHANGE_EVENT}`);
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        console.log(`Store : removeChangeListener -> ${CHANGE_EVENT}`);
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default Store;