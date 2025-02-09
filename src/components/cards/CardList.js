import React, { Fragment } from "react";
import Card from "./Card";


const CardList = ({ robots }) => {

    const cafrdComponent = robots.map(user => {
      return  <Card key={user.id} 
        id={user.id} 
        name={user.name}
         email={user.email} />
    }
    )

    return (
        <Fragment>
            {cafrdComponent}
        </Fragment>
    )
}

export default CardList;