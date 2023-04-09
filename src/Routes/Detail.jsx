import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState([])
  const params = useParams();
  const getDentist = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
      .then((response)=>{
      return response.json()
    })
    setDentist(data)
  }

  useEffect(()=>{
    getDentist();
  },[])
  return (
    <>
    <h1 className='text-2xl'>Detail Dentist id </h1>
    <div className="mt-5">
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <h1 className='className="bg-white text-black dark:bg-black dark:text-white text-center text-3xl font-bold mt-10'>{dentist.name}</h1>
        <p className='className="bg-white text-black dark:bg-black dark:text-white text-center pt-2 text-lg mt-5'>{dentist.email}</p>
        <p className='className="bg-white text-black dark:bg-black dark:text-white text-center pt-2 text-lg'>{dentist.phone}</p>
        <p className='className="bg-white text-black dark:bg-black dark:text-white text-center pt-2 text-lg underline'>{dentist.website}</p>
      </div>
    </>
  )
}

export default Detail