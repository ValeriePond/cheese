import { Plate } from "../components/Plate";
import { Item } from "../components/Item";
import { Card } from "../components/Card";
import React from 'react';
export const Catalog = ({items, onAddToCart, setItemOpened, onShowItem}) => {

  const [count, setCount] = React.useState(200);
  const plus = () => { setCount(count + 50)};
  const minus = () => { if(count>100){setCount(count - 50)}};
  const onCart=(obj) => onAddToCart(obj);

  const sortItemsNamePlus=(items)=>{items.sort((a,b)=>items.title.localeCompare(b.title))};

  return(
    <div>
    <section className='pageTop catalogTop'>
      <h1>Каталог товаров</h1>
      <a  href="#menu">К покупкам</a>
    </section>
    <section className='catalogHit'>
      <h1>Лидер продаж</h1>
      {
      items.map((item) => (
        <div className="cardWrap cardOpen" key={item.id}>
        <img className='imgLeftTop' src={item.imageUrl} alt="cheese"></img>
        <div className='cardLeftSide'>
          <h2>{item.title}</h2>
          <div className='priceCatalog'>
            <h3>{item.price} KZT</h3>
            <p>за 100 гр</p>
          </div>
          <details open>
        <summary >Подробнее</summary>
        <div>{item.description}</div></details>
        <div className='hitPrice'>
        <div className='weight'>
            <button onClick={minus}>-</button>
            <p>{count} гр</p>
            <button onClick={plus}>+</button>
          </div>
        <div className='basket' onClick={onCart}><img src='img/shopping-cart.svg' alt="cart"></img>В корзину</div></div> 
        </div>
      </div>
      ))[1]}
    </section>
    <section className='catalogSection'>
      <h1>Каталог</h1>
      <div className='menu'>
        <ul><span>Сортировать по:</span> 
          <li className='mt-20'><a>Названию А-Я</a></li>
          <li><a>Названию Я-А</a></li>
          <li><a>Цене 1-9</a></li>
          <li><a>Цене 9-1</a></li>
        </ul>
      </div>  
      <div className='catalogItems'>{
      items.map((item) => (
      <Item key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} onCart={(obj) => onAddToCart(obj)} onShow={(obj) => onShowItem(obj)} onClickItem= {() => setItemOpened(true)} {...item}/>
      ))}</div>
    </section>
    <Plate onCart={(obj) => onAddToCart(obj)} />
    </div>
    )
}