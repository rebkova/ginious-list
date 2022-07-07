import React, { ReactElement } from "react";

import { drinkList } from "../../data/drink_list";
import styles from "./carousel_card.css";


const CarouselCard = (): ReactElement => {

  return <div className={styles.carouselContainer}>
    <div className={styles.carousel}></div>
    {drinkList.map(drink => {
      return (
        <div key={drink.strDrinkThumb} className={styles.card}>
          <img key={drink.strDrink} src={drink.strDrinkThumb}></img>
          <h1 key={drink.idDrink}>{drink.strDrink}</h1>
        </div>
      )
    })}
  </div>
}

export default CarouselCard;