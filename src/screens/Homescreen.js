import React from 'react'
import albums from '../albumsdata';
import Album from '../components/Album';

export default function Homescreen() {
  return (
    <div>
      <div className='row'>
        {albums.map(album=>{
            return <div className='col-md-4'>
              <Album album={album}/>
            </div>
        })}
      </div>

      <div>
        
      </div>
    </div>
  )
}
