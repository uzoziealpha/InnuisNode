import React from 'react'
import albums from '../albumsdata';


export default function Homescreen() {
  return (
    <div>
      <div className='row'>
         
      <h1>{albums.length}</h1>
      </div>
    </div>
  )
}
