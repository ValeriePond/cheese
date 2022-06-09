import { Plate } from "../components/Plate";
import { Item } from "../components/Item";
import React from 'react';
export const Catalog = ({items, onAddToCart, setItemOpened}) => {

  return(
    <div>
    <section className='topCatalog'>
      <h1>Каталог товаров</h1>
    </section>
    <section className='catalogHit'>
      <h1>Лидер продаж</h1>
      {/* {
      items.map((item, index) => (
      <Card key={index} imageUrl={item.imageUrl} title={item.title} price={item.price} description={item.description} onCart={(obj) => onAddToCart(obj)}/>
      ))[1]} */}
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
      <Item key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} onCart={(obj) => onAddToCart(obj)} onClickItem= {() => setItemOpened(true)} {...item}/>
      ))}</div>
    </section>
    <Plate onCart={(obj) => onAddToCart(obj)}/>
    </div>
    )
}