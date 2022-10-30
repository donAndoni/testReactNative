import {SET_ANIMALS} from "./actions";

const initialState = {
    animals: '',
};

function lastApiCall(state=initialState, action) {
    switch (action.type) {
        case SET_ANIMALS:
            return {...state, animals: action.payload };
        default:
            return state;
    };
};

export default lastApiCall;