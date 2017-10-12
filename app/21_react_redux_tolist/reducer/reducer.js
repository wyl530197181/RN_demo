import {combineReducers} from 'redux'
import reduceNum from './reducerNum'
import reduceText from './reducerText'

const todoApp = combineReducers({
    num: reduceNum,
    text: reduceText
});

export default todoApp