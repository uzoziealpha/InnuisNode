import axios from 'axios';
export const getAllAlbums=()=>async dispatch=>{

    dispatch({type: 'GET_ALBUMS_REQUEST'})
   
    try {
        const response = await axios.get('/api/albums/getallalbums')
        console.log(response);
        dispatch({type: 'GET_ALBUMS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_ALBUMS_FAILED', payload : error})
    }

}