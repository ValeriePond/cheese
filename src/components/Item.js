import React from 'react';
import AppContext from './context';

export const Item = ({id, title, imageUrl, price, description, onCart, onClickItem, onShow}) =>{
  
  const [count, setCount] = React.useState(200);
  const plus = () => { setCount(count + 50)};
  const minus = () => { if(count>100){setCount(count - 50)}};

  const onClickCart = () => {
    onCart({id, title, imageUrl, price, count});
  };
  const onClickMore = () => {
    onShow({id, title, imageUrl, price, count, description});
    onClickItem();
  };

  // const onShowItem = () => {
  //   onItem({ title, imageUrl, price, count});
  //   setIsShowed(!isShowed);
  // };

    return(
        <div className="catalogItemMini" >
        <img src={imageUrl} alt='cheese'></img>
        <h2>{title}</h2>
        <div className='priceCatalogMini'>
          <h3>{price} KZT</h3>
          <p  className='moreMini'> за 100 гр</p>
        </div>
        <div className='weightMini'>
          <button onClick={minus}>-</button>
          <p>{count} гр</p>
          <button onClick={plus}>+</button>
        </div>
        <div className='basketMini' onClick={onClickCart}><img className='cartImgMini' src='img/shopping-cart.svg' alt="chese"></img><a>В корзину</a></div>
        <p  className='moreMini' onClick={onClickMore}>Подробнее</p>
      </div>
    )
}