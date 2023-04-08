import React from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites"))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((favorite) => (
          <div className="card" key={favorite.id}>
            <Link to={'detail/' + favorite.id}>
              <img src="../assets/doctor.jpg" alt="Imagen odontologo"></img>
              <h1 className="">{favorite.name}</h1>
              <h2>{favorite.username}</h2>
              <h3>{favorite.id}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
