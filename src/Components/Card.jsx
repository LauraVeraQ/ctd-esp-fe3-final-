import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/context";
import doctor from '../assets/doctor.jpg';

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useGlobalContext();
  const addFavorite = (nameDentist, usernameDentist, idDentist) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (state.data[0]){
      const addValidate = state.data.some(fav => fav.id === idDentist)
      if (!addValidate) {
        dispatch({
          type: 'update',
          payload: {...state.data[0], name: nameDentist, userName: usernameDentist, id: idDentist}
        })
      }
    } else {
      dispatch({
        type: 'update',
        payload: {name: nameDentist, userName: usernameDentist, id: idDentist}
      })
    }
  }

  return (
    
    <div className="card ">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={'detail/' + id}>
          <img src={doctor} alt="Imagen odontologo"></img>
          <h1 className="">{name}</h1>
          <h2>{username}</h2>
          <h3>{id}</h3>
        </Link>
        <button onClick={() => addFavorite(name, username, id)} className="favButton">Add fav</button>
    </div>
    
  );
};

export default Card;
