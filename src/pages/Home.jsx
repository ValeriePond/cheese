
import { Item } from "../components/Item";
import React from 'react';
export const Home = ({items,onAddToCart, setItemOpened}) => {
    return(
    <div>
        <section className="pageTop">
        <h1 className="pageTopHead">СЫРИУС</h1>
        <p >Крафтовая семейная сыроварня</p>
        <a  href="#About">Подробнее</a>
    </section>
    <section className="pageList">
        <h2>Вкусный</h2>
        <h2 className="list list2"> 100% Натурально</h2>
        <h2>Свежий</h2>
    </section>
    <section className="pageAbout" id="About">
      <div className='hhText'>
        <h5>О нас</h5>
        <h2>Вступительное Слово</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <img src='img/author.jpg' alt='author'></img>
    </section>
    <section className="pageCarusel"></section>
    <section className="imageBetween"><img src="img/line.jpg" alt="" /></section>
    <section className="pageEdu" id="Education">
        <img src='img/edu1.jpg' alt='edu'></img>
      <div>
      <div className='hhText'>
        <h5>Обучение</h5>
        <h2>Обучение</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="https://www.instagram.com/cheese_almaty/">Подробнее...</a>
        </div>
      </div>
      </section>
    <section className="pageQuote">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </section>
    <section className="pageShop">
      <div className='shopLeft'>
        <div className='hhText'>
        <h5>Продукция</h5>
        <h2>Сыр</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="https://www.instagram.com/cheese_almaty/">К покупкам</a>
        </div>
      </div>
      <div className='catalogItems'>{
      items.map((item) => (
      <Item key={item.index} imageUrl={item.imageUrl} title={item.title} price={item.price} onCart={(obj) => onAddToCart(obj)} id={item.id} onClickItem= {() => setItemOpened(true)}/>
      ))[5]}</div>
      {/*<div className="catalogItem">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='priceCatalog'>
          <h3>1 000 KZT</h3>
          <p> за 100 гр</p>
        </div>
        <div className='weight'>
          <button onClick={minus}>-</button>
          <p>{count} гр</p>
          <button onClick={plus}>+</button>
        </div>
        <div className='basket'><img className='cartImg' src='img/shopping-cart.svg' alt='a'></img><a>В корзину</a></div>
        <p className='more'>Подробнее</p>
  </div>*/}
      
    </section>
    <section className="pageRate">
      <h2>Отзывы</h2>
      <div className='grade'>
        <div className="cardGrade">
          <p>“Приятный вкус, хороший аромат, легко режется, не липнет к ножику, не рассыпается”</p>
          <h2>Катя</h2>
        </div>
        <div className="cardGrade">
          <p>“Мне сыр понравился. Первый раз пробовала Чеддер, раньше думала он острый или чересчур пряный, а он оказался нежным и потрясающе вкусным.”</p>
          <h2>Сабина</h2>
        </div>
      </div>
    </section>
    </div>
    )
}