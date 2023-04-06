import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = (nameDentist, usernameDentist, idDentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    // const prevFavorites = localStorage.getItem('favoritesDentists')
    // let arrayFavorites = JSON.parse(prevFavorites)
    // arrayFavorites ? arrayFavorites.push({name:nameDentist, username: usernameDentist, id: idDentist})
    // localStorage.setItem()
  }

  return (
    <Link to={'detail/' + id}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="../assets/doctor.jpg" alt="Imagen odontologo"></img>
        <h1 className="">{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
        <button onClick={addFav(name, username, id)} className="favButton">Add fav</button>
    </div>
    </Link>
  );
};

export default Card;
