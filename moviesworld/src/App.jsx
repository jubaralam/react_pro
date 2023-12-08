import React from 'react'
import './App.css'
import Card from './Components/Card'
import GetData from './Components/GetData'
const App = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
<GetData />
  <Card />
  <Card />
  <Card />
  <Card />
    </div>
  )
}

export default App
