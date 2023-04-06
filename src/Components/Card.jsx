import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = (nameDentist, usernameDentist, idDentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let favorites = [{name: nameDentist, userName: usernameDentist, id: idDentist}]
    let prevFavorites = JSON.parse(localStorage.getItem("favorites"))
    if(prevFavorites !== null){
      favorites = [...prevFavorites,{name: nameDentist, userName: usernameDentist, id: idDentist}]
    }
    //console.log('prevFavorites', prevFavorites)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    
  }

  return (
    
    <div className="card ">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={'detail/' + id}>
          <img src="../assets/doctor.jpg" alt="Imagen odontologo"></img>
          <h1 className="">{name}</h1>
          <h2>{username}</h2>
          <h3>{id}</h3>
        </Link>
        <button onClick={() => addFav(name, username, id)} className="favButton">Add fav</button>
    </div>
    
  );
};

export default Card;
