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
      // console.log('response', response)
      return response.json()
    })
    setDentist(data)
  }

  useEffect(()=>{
    getDentist();
  },[])
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>{dentist.name}</h1>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
    </>
  )
}

export default Detail