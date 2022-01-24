import { createContext, useReducer } from "react";

const initialState = {
    budget: 0,
    purchases: [
        {
            id: 1,
            name: "example",
            price: 0
        },
    ]
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PURCHASE':
            return {
                ...state,
                purchases: [...state.purchases, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                purchases: state.purchases.filter(
                    (expense) => expense.id !== action.payload)
            };
        case 'SAVE_BUDGET':
            return {
                ...state, budget: action.payload
            }
        case 'EDIT_BUDGET':
            return {
                ...state, budget: action.payload
            }
        default:
            return state;
    }
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            purchases: state.purchases,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>)
}
