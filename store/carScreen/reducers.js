import { SELECT_CARS } from "./types";

const initialState = {
    data: []
}

export const carListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARS:
            return { ...state, data: action.payload }

        default:
            return state
    }
}