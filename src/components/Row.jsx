import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'


function Row({title,fetchUrl,isPresent}) {
     const [allmovies, setAllmovies] =useState()
     const base_url ="https://image.tmdb.org/t/p/w500/";

   /* console.log(fetchUrl);*/
   const  fetchData = async()=>{
   const {data} = await instance.get(fetchUrl)
   /*console.log(data.results);*/

   setAllmovies(data.results)
   }

   console.log(allmovies);


    useEffect(()=>{
       fetchData()
    },[])



  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="movie-row">
            {
                allmovies?.map(item=>(     // gvin qstn mark, if items undekil  //array ayat kond map use chythu //kitia data impropr ahnu so we give base_url.
                    <img className='movie' src={`${base_url}${isPresent?item.poster_path: item.backdrop_path}`} alt="no image" />
                ))
            }
        </div>
    </div>
  )
}

export default Row