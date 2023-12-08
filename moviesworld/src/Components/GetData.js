import axios from 'axios';
import React from 'react'

const GetData = () => {
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
async function requestData(){

    try  {
        const response = await  axios.get(options)
        const data = await response.json()
console.log(data)
    } catch (error) {
        console.error(error);
    }}
    requestData()
}
export default GetData