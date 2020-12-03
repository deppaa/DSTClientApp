import { AUTH } from "./types";

const initialState = {
    isAuth: null
}

export const authScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return { ...state, isAuth: action.payload }
            break;

        default:
            return state
            break;
    }
}