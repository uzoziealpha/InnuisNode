import React, {useState} from 'react'


export default function Album({album}) {
    const [ quantity, setquantity] = useState(1)
  return (
    <div className='shadow-lg p-1 mb-5 bg-black rounded border border-warning'>
     
      <img src={album.cover} alt="img-fluid" style={{height: '200px', width: '200px'}}/>
    
      <div className='flex-container'>
      
        <div className='info'>
          <p><b>{album.artist}</b></p>
          <p>{album.album}</p>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100 m-1'>
         <button className='btn'>Get Album</button>
        </div>
        <div>
        
        </div>
      </div>
      </div>
  )
}
