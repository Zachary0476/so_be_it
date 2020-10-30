export const post = (state = { list: [] }, action) => {
    switch (action.type) {
        case 'POST_DATA':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}