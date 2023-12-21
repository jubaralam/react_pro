import React from 'react'
import Movie from '../Movie/Movie'
const MoviesList = () => {
  return (
    <div className='border border-purple-500 p-1 grid lg:grid-cols-4 h-auto  md:grid-cols-2 sm:grid-cols-1 gap-4 '>

     {

       Array(20).fill().map((item, index)=>{
        return(
          <Movie key={index} />
        )
       })
     }
    </div>
  )
}

export default MoviesList
