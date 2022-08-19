
export const editFormReducer = (state, action) => {
    switch (action.type) {
        
        case 'CHANGE_INPUT':
        return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'ADD_TO_ARRAY':

            break;
        case 'REMOVE_FROM_ARRAY':

            break;
        default:
            return state
    }
}