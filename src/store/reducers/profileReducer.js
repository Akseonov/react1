import { CHANGE_IS_CHECKED } from "../actions/profileAction";

const initialState = {
    isChecked: false,
}

export default function profileReducer ( state = initialState, action ) {
    switch (action.type) {
        case CHANGE_IS_CHECKED:
            return {
                ...state,
                isChecked: !state.isChecked
            }
        default:
            return state;
    }
}
