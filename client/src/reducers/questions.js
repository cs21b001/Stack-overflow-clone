const questionsReducer = (state = {data: null}, action) => {
    switch(action.type){
        case 'POST_QUESTION':
            return { ...state }
        case 'POST_ANSWER':
                return { ...state }
        case 'FETCH_ALL_QUESTIONS':
            return { ...state, data: action.payload}
        case 'POST_REVIEW':
            return { ...state }
        case 'FETCH_NOTIFICATION':
            return { ...state, data: action.payload}
        case 'UPDATE_NOTIFICATION':
            return { ...state }
        default:
            return state;
    }
}
export default questionsReducer