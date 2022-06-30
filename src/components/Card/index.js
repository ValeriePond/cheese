import React from "react";
import AppContext from "../context"; 

import styles from './Card.module.scss';
export const Card = ({onClose, items = []}) =>{

    return(
      <div className="overlay">
        {items.map((obj) => (<div className={styles.cardWrap} key={obj.id}>
        <img  className={"mt-50 mb-20 cu-p " + styles.removeBtn} onClick={onClose} src='img/delete.svg' alt='img'></img>
        <div className={styles.cardOpen}>
        <img className={styles.imgLeft} src={obj.imageUrl} alt="cheese"></img>
        <div className={styles.cardLeftSide}>
          <h2>{obj.title}</h2>
          <div className={styles.priceCatalog}>
            <h3>{obj.price} KZT</h3>
            <p>за 100 гр</p>
          </div>
          <details open>
        <summary >Подробнее</summary>
        <div>{obj.description}</div></details>
        <details>
        <summary >Подача</summary>
        <div>{obj.use}</div></details>
        <details>
        <summary >Хранение</summary>
        <div>{obj.shelfLife}</div></details>
        </div>
      </div>
      </div>))}
      </div>
    )
}