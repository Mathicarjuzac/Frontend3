import React from "react";





const Card = (infoPersona) => {

    return (
    <div className="Card">

        <p>Hola, {nombre}</p>

        <p>Tu animal favorito: {animal}</p>
        <p>Tu color favorito: <i>{color}</i></p>


    </div>
    );
};


export default Card;