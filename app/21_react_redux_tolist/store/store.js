
import reducers from '../reducer/reducer'
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux'
// import thunk from 'redux-thunk';//引入异步操作

// const initState = {num: 0, text: ""};
const middlewares = [thunk];
const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  let store = createStore(reducers);
 export const getStore = () => {
    return store;
}