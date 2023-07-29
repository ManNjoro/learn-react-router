import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() { 
  const [vanList, setVanList] = useState([])
  useEffect(()=>{
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVanList(data.vans))
  },[])

  const dataElements = vanList.map(van => {
    return (
      <Link to={van.id} key={van.id} >
      <div className='van-list'>
          <img src={van.imageUrl} alt={van.name} className='van-list-img'></img>
          <div className='van-details'>
            <span className='description'>{van.name}</span>
            <span className='price'>${van.price}/day</span>
          </div>  
      </div>
      </Link>
    )
  })
  return (
    <div className='van-list-container'>
      <h1>Your listed vans</h1>
      {
        vanList.length > 0 ? (
          <section>
            {dataElements}
          </section>
        ) : (<h2>Loading...</h2>)
      }
      
    </div>
  )
}
