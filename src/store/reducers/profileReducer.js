const initialState = {
    isChecked: false,
}

export const profileReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'changeIsChecked':
            return {
                ...state,
                isChecked: !state.isChecked
            }
        default:
            return state;
    }
}
