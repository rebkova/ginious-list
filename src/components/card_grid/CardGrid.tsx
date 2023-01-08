import React, { ReactElement } from "react";

import styles from './card_grid.css';
import { drinkList } from "../../data/drink_list";

import Card from '../card/Card';

const CardGrid = (): ReactElement => {
    return (
        <div className={styles.cardGrid}>
            {drinkList.map(drink => {
                return (
                    <Card 
                        key={drink.idDrink}
                        image={drink.strDrinkThumb}
                        title={drink.strDrink}
                    />
                )
            })}
        </div>
    )
}

export default CardGrid;