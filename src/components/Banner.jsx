import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'

 
function Banner({fetchUrl}) {

const [Movie , setMovie] =useState()
const base_url ="https://image.tmdb.org/t/p/original/";
    const fetchData = async()=>{
        const {data}  = await instance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }

console.log(Movie);

useEffect(()=>{
    fetchData()
},[])


  return (
   
    <div style={{height:'600px',backgroundImage:`url(${base_url}${Movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed',backgroundPosition:'center'}}>
    <div className="banner-content">
      <h1>{Movie?.name}</h1>
      <button className='subs-btn'>Subscribe to watch</button>
      <button className='btn-plus '>+</button>
      <h2>{Movie?.overview?.slice(0,200)}...</h2>
    </div>
    </div>
    )
}

export default Banner