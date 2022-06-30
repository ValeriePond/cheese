import React from "react";
import AppContext from "../context"; 

import styles from './Card.module.scss';
export const TopPosition = ({id, title, imageUrl, price, description, use, shelfLife, onCart, count, plus, minus, plusPc, minusPc}) =>{
     
   const onClickCart = () => {
    onCart({id, title, imageUrl, price, count});
  };

    return(
        <div>{
          (title === 'Белпер Кнолле' || title === 'Лабне') ?
          (<div className={styles.cardWrap + " " + styles.cardOpen} key={id}><img className={styles.imgLeftTop} src={imageUrl} alt="cheese"></img>
          <div className={styles.cardLeftSide}>
            <h2>{title}</h2>
            <div className={styles.priceCatalog}>
              <h3>{price} KZT</h3>
              <p>за 1 шт</p>
            </div>
            <details open>
           <summary >Подробнее</summary>
          <div>{description}</div></details>
          <details>
          <summary >Применение</summary>
          <div>{use}</div></details>
          <details >
          <summary >Срок Хранения</summary>
          <div>{shelfLife}</div></details>
          <div className={styles.hitPrice}>
          <div className={styles.weight}>
              <button onClick={minusPc}>-</button>
              <p>{(count-100)/100} шт</p>
              <button onClick={plusPc}>+</button>
            </div>
          <div className={styles.basket + ' basket'} onClick={onClickCart}><img src='img/shopping-cart.svg' alt="cart"></img>В корзину</div></div> 
          </div></div>): (<div className={styles.cardWrap + " " + styles.cardOpen} key={id}><img className={styles.imgLeftTop} src={imageUrl} alt="cheese"></img>
          <div className={styles.cardLeftSide}>
            <h2>{title}</h2>
            <div className={styles.priceCatalog}>
              <h3>{price} KZT</h3>
              <p>за 100 гр</p>
            </div>
            <details open>
           <summary >Подробнее</summary>
          <div>{description}</div></details>
          <details>
          <summary >Применение</summary>
          <div>{use}</div></details>
          <details >
          <summary >Срок Хранения</summary>
          <div>{shelfLife}</div></details>
          <div className={styles.hitPrice}>
          <div className={styles.weight}>
              <button onClick={minus}>-</button>
              <p>{count} гр</p>
              <button onClick={plus}>+</button>
            </div>
          <div className={styles.basket + ' basket'} onClick={onClickCart}><img src='img/shopping-cart.svg' alt="cart"></img>В корзину</div></div> 
          </div></div>)
}
        </div>
    )
}