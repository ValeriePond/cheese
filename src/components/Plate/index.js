import React from 'react';

import styles from './Plate.module.scss';

export const Plate = ({id, title, imageUrl, price, description, onCart, minusPc, plusPc, count}) =>{

  // const [count, setCount] = React.useState(1);
  // const plus = () => { setCount(count + 1)};
  // const minus = () => { if(count>1){setCount(count - 1)}};
  const onClickCart = () => {
    onCart({id, title, imageUrl, price, count});
  };

    return(<section>
      <div className={styles.namePlate}>{title}</div>
     <div className={styles.catalogPlate}>
    <img className={styles.imgCircle} src={imageUrl} alt='plate'></img>
     <div className={styles.leftPlate}>
      <div className={styles.priceCatalog + ' mb-30'}><h3>{price} KZT</h3></div> 
      <ol type="1">{
        description.map((item, i) =>
          <li key={i}>{item}</li>
        )}
      </ol> 
      <div className={styles.weight}>
          <button onClick={minusPc}>-</button>
          <p>{(count-100)/100} шт</p>
          <button onClick={plusPc}>+</button>
        </div>
      <div className='basket' onClick={onCart}><img src='img/shopping-cart.svg' alt='cart'></img><a onClick={onClickCart}>В корзину</a></div>
    </div> 
    </div>
    </section>
    )
} 