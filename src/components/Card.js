import React from "react";
import AppContext from "./context";
export const Card = ({onClose, items = []}) =>{
  // const [count, setCount] = React.useState(200);
  // const plus = () => { setCount(count + 50)};
  // const minus = () => { if(count>100){setCount(count - 50)}};

    return(
      <div className="overlay">
        {items.map((obj) => (<div className="cardWrap" key={obj.id}>
        <img  className="mt-50 mb-20 removeBtn cu-p" onClick={onClose} src='img/delete.svg' alt='img'></img>
        <div className='cardOpen'>
        <img className='imgLeft' src={obj.imageUrl} alt="cheese"></img>
        <div className='cardLeftSide'>
          <h2>{obj.title}</h2>
          <div className='priceCatalog'>
            <h3>{obj.price} KZT</h3>
            <p>за 100 гр</p>
          </div>
          <details open>
        <summary >Подробнее</summary>
        <div>{obj.description}</div></details>
        <details>
        <summary >Подача</summary>
        <div>{obj.description}</div></details>
        <details>
        <summary >Хранение</summary>
        <div>{obj.description}</div></details>
        {/* <div className='hitPrice'>
        <div className='weight'>
            <button onClick={minus}>-</button>
            <p>{obj.count} гр</p>
            <button onClick={plus}>+</button>
          </div>
        <div className='basket' onClick={onCart}><img src='img/shopping-cart.svg' alt="cart"></img>В корзину</div></div> */}
        </div>
      </div>
      </div>))}
      </div>
    )
}