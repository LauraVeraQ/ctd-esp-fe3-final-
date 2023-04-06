import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [alerta,setAlerta] = useState(false);
  const [mensajeAlerta,setMensajeAlerta] = useState("");
  const handleChangeName = (e)=>{
      setNombre(e.target.value)
  }
  const handleChangeEmail = (e)=>{
      setEmail(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nombre.length <= 3 || nombre[0] === " "){
        setAlerta(true)
        setMensajeAlerta("Por favor chequea que la información sea correcta")

        console.log('entronombre')
    }
    if(email.length <= 6 ){
        setAlerta(true)
        setMensajeAlerta("Por favor chequea que la información sea correcta")

    }
    if (nombre.length > 3 && nombre[0] !== " ") {
        setAlerta(false)
        setMensajeAlerta("")
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2 className='text-3xl font-bold mb-5 text-amber-500'>BIENVENIDO</h2>
        <h2 className='text-2xl mb-12 text-orange-200'>FORMULARIO DE CONTACTO</h2>
        <div className='flex flex-col'>
        <label className='text-xl font-bold mb-3 mt-3 text-amber-500'>Nombre completo: </label>
        <input  className = 'rounded-xl px-3 py-2' type='text' onChange={handleChangeName} value={nombre} required/>
        <label className='text-xl font-bold mb-3 mt-3 text-amber-500'>email: </label>
        <input  className = 'rounded-xl px-3 py-2' type='email' onChange={handleChangeEmail} value={email} required/>
        </div>
        <div>
            <input className='border rounded-md px-5 py-3 mt-12 text-amber-500 border-amber-500' type='submit' value="Enviar"/>
            {alerta && <div className='mt-2 mb-2 text-red-600'>{mensajeAlerta}</div>}
        </div>
      </form>
    </div>
  );
};

export default Form;
