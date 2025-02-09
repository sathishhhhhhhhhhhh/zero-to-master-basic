import React from "react";

const Card = (props)=> {    
   return (
    <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
        <img  alt="Robots" src={`https://robohash.org/${props.id}`} />
        <div>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
    </div>
   )
}

export default Card;