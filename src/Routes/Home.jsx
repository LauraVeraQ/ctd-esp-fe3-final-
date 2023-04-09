import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const getDentists = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
      // console.log('response', response)
      return response.json()
    })
    setDentists(data)
  }

  useEffect(()=>{
    getDentists();
  },[])
  return (
    <main>
      <h1 className='text-2xl'>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((el)=> {
          return (<Card key={el.id} name = {el.name} id={el.id} username={el.username}/>)
        })}
      </div>
    </main>
  )
}

export default Home