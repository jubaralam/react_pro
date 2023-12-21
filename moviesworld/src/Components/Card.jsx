import React from 'react'


//color Code
//blue #227fb4
//gray #
// light-gray #9ca3af
const Card = () => {
  return (
    <div className='flex flex-col w-[180px] justify-center m-2 shadow-lg text-center pb-5
    bg-gradient-to-r from-gray-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500 text-white
    '>
      <div>
        <img src="https://filmfare.wwmindia.com/content/2023/aug/jawan21691407612.jpg" alt=""
className='w-full m-auto'
        />

      </div>
      <div>
 

        <h2 className='text-2xl font-serif font-bold'>JAWAN</h2>
        <p className='text-[12px]'>20/10/2023</p>
      
        <p className='text-[14px]'>Shah Rukh Khan, Nayanthara, Deepika</p>
      </div>
    </div>
  )
}

export default Card
