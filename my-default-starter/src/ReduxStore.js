
import { colorReduser, creduser } from './Reducers/creduser';
import { combineReducers, createStore } from 'redux';
import Reducer from '../src/Reducers/CounterReducer';



const rootReduser= combineReducers({
    count:Reducer,
    color:creduser
})


const store = createStore(rootReduser);

export default store;
// CounterAction.js
export const  increment = (counterData) => {
    return {
        type: 'INCREMENT',
        payload: counterData
    }
}
export const decrement = (counterData) => {
    return {
        type: 'DECREMENT',
        payload: counterData
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}
