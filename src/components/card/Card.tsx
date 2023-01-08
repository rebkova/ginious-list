import React, { ReactElement } from "react";

import styles from './card.css';

interface Props {
    image: string,
    title: string,
}

const Card = ({image, title}: Props): ReactElement => {
    return (
        <div className={styles.cardContainer}>
            <img src={image}></img>
            <h1>{title}</h1>
        </div>
    )
}

export default Card;