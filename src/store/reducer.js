// ###############################
// REDUCER
// ###############################

const initialState = {
    counter: 0,
    results: [],
    posts: [],
    photos: [],
    comments: [],
    dataUser: [],
    contador: 1
}
const reducer = ( state = initialState, action)=>{

    switch ( action.type ) {
            
        case "GET_ALL_POSTS_ASYNC":
            console.log( "[ALL POSTS]", action.data )
            return{
                ...state,
                posts: action.data
            }
        case "GET_ALL_PHOTOS_ASYNC":
            console.log( "[ALL PHOTOS]", action.data )
            return{
                ...state,
                photos: action.data
            }
        case "GET_ALL_COMMENTS_ASYNC":
            console.log( "[ALL COMMENTS]", action.data )
            return{
                ...state,
                comments: action.data
            }
        case "GET_USER_BY_ID_ASYNC":
            console.log( "[DATA USER: ]", action.data )
            return{
                ...state,
                dataUser: action.data
            }
        case "SUMAR__CONTADOR":
            return{
                ...state,
                contador: state.contador + 1
            }
        
        default: return state
    }
}

export default reducer
