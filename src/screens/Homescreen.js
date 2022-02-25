import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbums } from '../actions/albumActions';
import albums from '../albumdata';
import Album from '../components/Album';



export default function Homescreen(){
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAlbums())
    }, [])

  return (
    <div>
      <div className='row'>
        
         {albums.map(album=>{
            
            return <div className='col-md-2 p-3'>
             <div>
                <Album album={album}/>
              </div>
            </div>
        })}
      </div>

      <div>
        
      </div>
    </div>
  )
}

