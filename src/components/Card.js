import React from "react";
export const Card = ({ title, imageUrl, price, onCart, description, onClose, items = []}) =>{
  const [count, setCount] = React.useState(200);
  const plus = () => { setCount(count + 50)};
  const minus = () => { if(count>100){setCount(count - 50)}};

  

    return(
      <div className="overlay">
        <div className="cardWrap">
        <img  className="mt-50 mb-20 removeBtn cu-p" onClick={onClose} src='img/delete.svg' alt='img'></img>
        <div className='card'>
        <img className='imgLeft' src='img/bg_shops.jpg' alt="cheese"></img>
        <div className='cardLeftSide'>
          <h2>{title}</h2>
          <div className='priceCatalog'>
            <h3>{price} KZT</h3>
            <p>за 100 гр</p>
          </div>
          <details open>
        <summary >Подробнее</summary>
        <div>{description}</div></details>
        <div className='hitPrice'>
        <div className='weight'>
            <button onClick={minus}>-</button>
            <p>{count} гр</p>
            <button onClick={plus}>+</button>
          </div>
        <div className='basket' onClick={onCart}><img src='img/shopping-cart.svg' alt="cart"></img><a>В корзину</a></div></div>
        </div>
      </div></div>
      </div>
    )
}