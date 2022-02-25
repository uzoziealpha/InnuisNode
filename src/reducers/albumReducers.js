export const getAllAlbumsReducer=(state={} , action)=>{

    switch(action.type)
    {
        case 'GET_ALBUMS_REQUEST' : return{
            ...state
        }
        case 'GET_ALBUMS_SUCCESS' : return{
            pizzas : action.payload
        }
        case 'GET_ALBUMS_FAILED' : return{
            error : action.payload
        }
        default : return state 
    }
}