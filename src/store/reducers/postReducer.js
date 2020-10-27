export const postReducer = (state = { title: 'hello' }, action) => {
    switch (action.type) {
        case 'POST_DATA':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}