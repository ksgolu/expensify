//@ts-check
//combineReducers are used to combine multiple reducers together
// it takes an object, where key/properties name are arbitary and value are the reducer function 
//then we pass the combineReducer function to createStore or we can directly implemet in createStore
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// initializing functions which return an action object to expenseReducer reducer function ----------------------------------------------- 
//ADD_EXPENSE Action for reducer function and as we know action is sent to the reducer through store.dispatch() check last line also--------------------
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt,
        },
    }
}

const deleteExpense = ({ id = '0' } = {}) => {
    return {
        type: 'DELETE_EXPENSE',
        id
    }
}


const editExpense = ( id, update ) => {
    return {
        type:'EDIT_EXPENSE',
        id,
        update
    }
}


//Reducer default state value-----------------------------
const expenseDefaultState = [];
const filterDefaultState = {
    text: '',
    sortBy: 'date', //amount or date
    startDate: undefined,
    endDate: undefined,
};

//Reducers--------------------------------

const expensesReducer = (state = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            {
                //concate method takes arguments and create a new array with older one and push the argument into this new array and return it
                //In this way didn't void the reducer rule i.e Never change state or action directly
                //*return state.concat(action.expense)

                //              or

                return [...state, (action.expense)]
            }
        case 'DELETE_EXPENSE':
            {
                return state.filter(({ id }) => id !== action.id )
            }
        case 'EDIT_EXPENSE':
            {
                return state.map(expense =>{
                    if (expense.id === action.id ) {
                        return{
                            ...expense,
                            ...action.update
                        }
                    } else {
                        return expense;
                    }
                })
            }
        default:
            return state;
    }
}

/**
 * action for filterReducer 
 * This function return an action object to filterReducer function
 */
const setTextFilter = ( text = '' ) => {
    return{
        type: 'SET_TEXT',
        text,
    }
}
 const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            {
                return{
                    ...state,
                    text: action.text
                }
            }
        default:
            return state;
    }
}

// directly implementing  combineReducer to createStore 
const store = createStore(
    combineReducers(
        {
            /*when we dispatch an action using store.dispatch(), then combineReducer pass the action to its both properties 
            * i.e expense & filter & action is catch by that reducer whose switch case is matched with action's type
            *
            * We must define a switch statement in both reducer and catch the 'type' property of action object in require reducer
            * For example when action.type === 'ADD_EXPENSE', we require this in expenseReducer, so, we catch this in expenseReducer's switch
            */
            expenses: expensesReducer,
            filter: filterReducer,
        }
    )
);
store.subscribe(() => console.log(store.getState()));


/**
 * store.dispatch take a single argument and that is action object and return the same object also
 * 
 * dispatching addExpense action (defined above) to store
 */
const itemone = store.dispatch(
    addExpense(
        {
            description: 'january rent',
            note: 'final rent to mata g',
            amount: 200,
            createdAt: new Date().getDate(),

        }
    )
)
const itemtwo = store.dispatch(addExpense({ description: 'feburary rent', amount: 300 }));

store.dispatch(deleteExpense({ id: itemone.expense.id }));

store.dispatch(editExpense( itemtwo.expense.id, { amount: 400 }));
store.dispatch(setTextFilter('rent'));

export default store;




const obj = {
    name:'satyam',
    id:25
}

console.log( { ...obj })










//defining state
const demoState = {
    expenses: [{
        id: 'satyam',
        description: 'january rent',
        note: 'budhi mata ko rent dena hai',
        amount: 9300,
        createdAt: 0
    }],
    filters: {
        text: 'text ',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined,
    },
};