import {createStore, combineReducers, applyMiddleware} from 'redux';

import {calculate} from '../reducer/reducer';//导入所有的reducer
const rootReducer = combineReducers({
    calculate,
    // navigator,
    // tab,
    // user,
});

let store = createStore(rootReducer);
export const getStore = () => {
    return store;
};

