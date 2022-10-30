
import { colorReduser } from './Reducers/creduser';
import { createStore } from 'redux';
import Reducer from '../src/Reducers/CounterReducer';




const initialState = {
    counterData: 1
}
const store = createStore(Reducer, initialState);

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
