import { SELECT_CARS } from "./types";

export const setCars = (data) => {
    return {
        type: SELECT_CARS,
        payload: data
    }
}

export const selectCars = () => async (dispatch, getState) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')

    dispatch(setCars(result))
}