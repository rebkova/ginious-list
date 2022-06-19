import React, { ReactElement } from "react";

import { drinkList } from "../data/drink_list";


const CarouselCard = (): ReactElement => {

  return <div>
    {drinkList.map(drink => {
      return (
        <div key={drink.strDrinkThumb}>
          <p key={drink.idDrink}>{drink.strDrink}</p>
          <img key={drink.strDrink} src={drink.strDrinkThumb}></img>
        </div>
      )
    })}
  </div>
}

export default CarouselCard;