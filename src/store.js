import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return [...state, action.payload]
    } else if (action.type === 'RESET_STORE'){
        return []
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);

export default storeInstance;