const initialState = {
    isChecked: false,
}

export default function profileReducer ( state = initialState, action ) {
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
