import React from 'react'


import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
  params: {
    order_by: 'date',
    type: 'movie'
  },
  headers: {
    'X-RapidAPI-Key': 'c425e565a6mshef81c55ff3345f9p196113jsn6d9243beec22',
    'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
  }
};

const res = async ()=>{
  const resData = await axios(options)
  console.log(resData.data)
}
res()
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
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
