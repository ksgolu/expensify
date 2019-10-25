
import { createStore } from 'redux';

//createStore take a function as a parameter and this parameterize function konwn as 'reducer' 
//The reducer function takes two parameter 1: state object & 2: action object
//? Key attribute of Reducer function:
// 1: It is a pure function - The output of pure function is purely depend on argument input
// 2: Never change state or action :- These two parameter are object, so we can set property to it But in Reducer function never do this


//Reducer function
const countReducer = (state = { count: 0 }, action) => {
    console.log('Store Running...');
    switch(action.type)
    {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        default:
            return state;  
    }
}

//passing reducer function to createStore 
const store = createStore(countReducer);

//getState() function return the current state
//console.log(store.getState());

//Subscribe function tiggerd when any changes occure to store(store state) or store re-run it take a function as its arguments and return a function
//the return function is useful when we want to stop the 'subscribe' function  at any point in program, 
//we just need to call it without any argument and it will stop the store.subscribe function
const unsubscribe = store.subscribe(() => console.log(store.getState()))

//dispatch allow us to send action object to reducer function. equivalent to setState(), when dispatch send action to store via reducer, store run again
// action sent by dispatch function are catched in sencond parameter of reducer i.e action
store.dispatch(
    //action object
    {
        type: 'INCREMENT',
    }

)
// console.log(store.getState());
store.dispatch(
    {
        type: 'RESET'
    }
)

 //!After implementing unsbscribe our 'store.subscribe' functon will not be invoked any more .
//unsubscribe();

store.dispatch(
    {
        type: 'DECREMENT'
    }
)
// console.log(store.getState());


export default store

