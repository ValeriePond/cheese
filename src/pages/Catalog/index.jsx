import styles from './Catalog.module.scss';

import { Plate } from "../../components/Plate";
import { Item } from "../../components/Item";

import React from 'react';
import { TopPosition } from '../../components/Card/TopPosition';

export const Catalog = ({plate, items, onAddToCart, setItemOpened, onShowItem, category, onClickCategory, sortType, onChangeSort, count, setCount, plus, minus, plusPc, minusPc}) => {


  const categories = ['Все', 'Полутвердые', 'Твердые', 'Творожные', 'Мягкие', 'С Плесенью', 'Сывороточные','Рассольные'];
  const sorting = [{name: 'названию ↑', sortP:'title'},
                   {name: 'названию ↓', sortP:'-title'}, 
                   {name: 'цене ↑', sortP:'price'}, 
                   {name: 'цене ↓', sortP:'-price'}];

  return(
    <div>
      <div style={{height: '120px'}}></div>
      <section className={styles.catalogTop}>
        <h1>Каталог товаров</h1>
      </section>
      <div className='mainSection'>
      
      <section className={styles.catalogSection}>
        <div className={styles.categorySection}>{
          categories.map((categoryName, i) =>
          <li key={i} onClick = {() => onClickCategory(categoryName)}>
            {categoryName}
          </li>)
        }</div>
        <div className={styles.menu}>
          <ul><span>Сортировать по: <div>{sortType.name}</div></span>
          <div className="mb-20"></div>{
            sorting.map((obj, i) => 
              <li key={i} onClick={() => onChangeSort(obj)}>{obj.name}</li>)
            }
          </ul>
        </div>
        <section className={styles.catalogHit}>
        {
        items.map((item) => (
          <TopPosition key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} use={item.use} description={item.description} shelfLife={item.shelfLife} onCart={(obj) => onAddToCart(obj)} count={count} setCount = {setCount} plus ={plus} minus={minus} plusPc={plusPc} minusPc={minusPc}/>
        ))[0]}
      </section> 
      <h1>Каталог</h1>
        <div className='catalogItems'>{
        items.map((item) => (
          <Item key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} onCart={(obj) => onAddToCart(obj)} onShow={(obj) => onShowItem(obj)} onClickItem= {() => setItemOpened(true)} count={count} setCount = {setCount} plus ={plus} minus={minus} plusPc={plusPc} minusPc={minusPc} {...item} />
        ))}</div>
      </section>{
      plate.map((item) =>(
          <Plate key ={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} description={item.description} onCart={(obj) => onAddToCart(obj)} count={count} plusPc={plusPc} minusPc={minusPc}/>
        ))[0]}
      </div>
    </div>
    )
}