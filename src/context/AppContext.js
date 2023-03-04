import React, { createContext, useReducer } from 'react';

const initialState = {
    turn: 0,
    minute: 0,
    hour: 0,
    day: 0,
    counters: [
        { id: "Rations", name: 'Rations', val: 10, increment: -1, rate: 'Per Day', flag: false },
        { id: "Water", name: 'Water', val: 22, increment: -2, rate: 'Per Day', flag: false },
        { id: "Torch", name: 'Torch', val: 3, increment: -1, rate: 'Per Hour', flag: false },
        
    ],
};

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'ACCOUNT_TIME':
            action.type = "DONE";
            if (action.payload.rate === 'Per Turn') {
                state.turn = state.turn + action.payload.cost;}
            if (action.payload.rate === 'Per Minute') {
                state.minute = state.minute + action.payload.cost;
                if (state.minute >= 60){
                    state.minute = state.minute - 60
                    state.hour = state.hour + 1
                    state.counters.forEach(function (counter) {
                        if (counter.rate === 'Per Hour') {
                            counter.val = parseInt(counter.val) + parseInt(counter.increment);}
                    });
                }
                if (state.hour >= 24){
                    state.hour = state.hour - 24
                    state.day = state.day + 1
                    state.counters.forEach(function (counter) {
                        if (counter.rate === 'Per Day') {
                            counter.val = parseInt(counter.val) + parseInt(counter.increment);}
                    });
                }
            }
            if (action.payload.rate === 'Per Hour') {
                state.hour = state.hour + action.payload.cost;
                if (state.hour >= 24){
                    state.hour = state.hour - 24
                    state.day = state.day + 1
                    state.counters.forEach(function (counter) {
                        if (counter.rate === 'Per Day') {
                            counter.val = parseInt(counter.val) + parseInt(counter.increment);}
                    });
                }
            }
            if (action.payload.rate === 'Per Day') {
                state.day = state.day + action.payload.cost;}            
            return {
                ...state,
            };

        case 'RESET_TIME':
            action.type = "DONE";                
            state.turn = 0
            state.minute = 0
            state.hour = 0
            state.day = 0

            return {
                ...state
            };

        case 'ADD_COUNTER':
            action.type = "DONE";                
            state.counters.push(action.payload)

            return {
                ...state
            };

        case 'ACCOUNT_COUNTER':
            action.type = "DONE";                
            state.counters.forEach(function (counter) {
                if (counter.rate === action.payload.rate) {
                    counter.val = parseInt(counter.val) + (counter.increment * action.payload.cost);}
            });

            return {
                ...state
            };

        case 'SET_VAL':
            action.type = "DONE";                
            state.counters.forEach(function (counter) {
                if (counter.name === action.payload.name) {
                    counter.val = action.payload.val;}
            });

            return {
                ...state
            };

        case 'SET_INC':
            action.type = "DONE";                
            state.counters.forEach(function (counter) {
                if (counter.name === action.payload.name) {
                    counter.increment = action.payload.increment;}
            });

            return {
                ...state
            };

        case 'DELETE_COUNTER':
            action.type = "DONE";
            state.counters = state.counters.filter(counter => counter.name !== action.payload)

            return {
                ...state,
            };

        default:
            return state;
    }
    
};

// 1. Sets the initial state when the app loads


// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    state.counters.forEach(function (counter) {
        if (counter.val === 0 && counter.flag === false) {
            alert(counter.name+ ' has reached 0!');
            counter.flag = true
        }
    });

    return (
        <AppContext.Provider
            value={{
                counters: state.counters,
                turn: state.turn,
                minute: state.minute,
                hour: state.hour,
                day: state.day,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
