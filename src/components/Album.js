import React from 'react'
import albums from '../albumsdata'

export default function Album({album}) {
  return (
    <div>
      <h1>{album.id}</h1>
      <img src={album.cover} alt="img-fluid" />
    </div>
  )
}
