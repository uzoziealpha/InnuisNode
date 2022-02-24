import React from 'react'
import albums from '../albumsdata';
import Album from '../components/Album';

export default function Homescreen() {
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
