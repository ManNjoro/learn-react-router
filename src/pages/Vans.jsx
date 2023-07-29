// import { useState } from 'react';
import { Link,  useLoaderData,  useSearchParams } from 'react-router-dom';
import { getVans } from '../api';

export function loader() {
    const data = getVans()
    return data
}

export default function Vans() {
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    // const [error, setError] = useState(null)

    const vans = useLoaderData()
    
    const filteredElements = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans
      
    const dataElements = filteredElements.map(van => (
        <div key={van.id} className='card'>
            <Link to={van.id} state={{search: `?${searchParams.toString()}`,type:typeFilter}}>
                <img className='van-img' src={van.imageUrl} alt='van'></img>
                <div className='description-price'>
                    <span className='description'>{van.name}</span>
                    <span className='price'>${van.price}/day</span>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
            
        </div>
        )
      )

      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className='cards-container'>
            <h1>Explore our van options</h1>
            <div className='van-list-filter-buttons'>
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}
                
            </div>
          <div className='van-cards'>
            {dataElements}
        </div>  
        </div>
        
    )
}