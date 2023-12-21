





// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM0ZDJiZWMzOGUyMTBiOWI4MjAyMGQ4ODZmNWZjMSIsInN1YiI6IjY1NzJkMDc0OWEzNThkMDBjNjU4ZTUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BspHRtmrZC2FfDNSJUjjY-JXGCO7XWQNEXlQwsia1kI'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/authentication', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM0ZDJiZWMzOGUyMTBiOWI4MjAyMGQ4ODZmNWZjMSIsInN1YiI6IjY1NzJkMDc0OWEzNThkMDBjNjU4ZTUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BspHRtmrZC2FfDNSJUjjY-JXGCO7XWQNEXlQwsia1kI'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/authentication', options)
  //   .then(response => response)
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));




















// import axios from 'axios';
// import React from 'react'

// const GetData = () => {
//     const options = {
//         method: 'GET',
//         url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
//         params: {
//             order_by: 'date',
//             type: 'movie'
//         },
//         headers: {
//             'X-RapidAPI-Key': 'c425e565a6mshef81c55ff3345f9p196113jsn6d9243beec22',
//             'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
//         }
//     };
//     async function requestData() {

//         try {
//             const response = await axios.get(options)
//             const data = await response.json()
//             console.log(data)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     requestData()
// }
// export default GetData








// const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c425e565a6mshef81c55ff3345f9p196113jsn6d9243beec22',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };
// const GetData = async ()=>{

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log("Result: ",result);
//     setContainer(result)
    
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(()=>{

//   GetData()
// },[endPoint])
