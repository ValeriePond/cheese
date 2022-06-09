import React from 'react';
export const Item = ({id, title, imageUrl, price, onCart, onClickItem}) =>{
  
  const [count, setCount] = React.useState(100);
  const plus = () => { setCount(count + 100)};
  const minus = () => { if(count>100){setCount(count - 100)}};

  const [isAdded, setIsAdded] = React.useState(false);
  const [isShowed, setIsShowed] = React.useState(false);

  const onClickCart = () => {
    onCart({ title, imageUrl, price, count});
    setIsAdded(!isAdded);
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
        <p  className='moreMini' onClick={onClickItem}>Подробнее</p>
      </div>
    )
}