
import React from "react";

const initialQuery = [];

function queryReducer(state, {type, payload}) {
    console.log('queryReducer', type, payload);
    switch (type) {
        case 'init': {
            return initialQuery;
        }
        case 'update': {
            return payload;
        }
        default:
            break;
    }
}

export {queryReducer, initialQuery};