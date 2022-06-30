import React from 'react';

import styles from './Item.module.scss';

export const Item = ({id, title, imageUrl, price, description, use, shelfLife, onCart, onClickItem, onShow, count, setCount, plus, minus, plusPc, minusPc}) =>{
  
  const onClickCart = () => {
    onCart({id, title, imageUrl, price, count});
  };

  const onClickMore = () => {
    onShow({id, title, imageUrl, price, count, description, use, shelfLife});
    onClickItem();
  };

    return(
        <div>
         {(title === 'Белпер Кнолле' || title === 'Лабне') ? (  
          <div className={styles.catalogItem} >
          <img src={imageUrl} alt='cheese'></img>
          <h2>{title}</h2>
          <div className={styles.priceCatalog}>
            <h3>{price} KZT</h3>
            <p  className={styles.more}> за 1 шт</p>
          </div>
          <div className={styles.weight}>
            <button onClick={minusPc}>-</button>
            <p>{(count-100)/100} шт</p>
            <button onClick={plusPc}>+</button>
          </div>
          <div className={styles.basket} onClick={onClickCart}><img className={styles.cartImg} src='img/shopping-cart.svg' alt="chese"></img><a>В корзину</a></div>
          <p  className={styles.more} onClick={onClickMore}>Подробнее</p>
        </div>
         ) :

        (<div className={styles.catalogItem} >
        <img src={imageUrl} alt='cheese'></img>
        <h2>{title}</h2>
        <div className={styles.priceCatalog}>
          <h3>{price} KZT</h3>
          <p  className={styles.more}> за 100 гр</p>
        </div>
        <div className={styles.weight}>
          <button onClick={minus}>-</button>
          <p>{count} гр</p>
          <button onClick={plus}>+</button>
        </div>
        <div className={styles.basket} onClick={onClickCart}><img className={styles.cartImg} src='img/shopping-cart.svg' alt="chese"></img><a>В корзину</a></div>
        <p  className={styles.more} onClick={onClickMore}>Подробнее</p>
        </div>
      )}</div> 
    )
}