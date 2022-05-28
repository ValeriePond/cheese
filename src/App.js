import './main.scss';
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="page__top">
        <h1 className="page__top-head">СЫРИУС</h1>
        <p className="page__top-p">Крафтовая семейная сыроварня</p>
        <a className="page__top-b" href="#">Подробнее</a>
    </section>
    <section className="page__list">
        <h2 className="list">Вкусный</h2>
        <h2 className="list list-2"> 100% Натурально</h2>
        <h2 className="list">Свежий</h2>
    </section>
    <section className="page__about">
      <div className='hh_text'>
        <h5>О нас</h5>
        <h2>Вступительное Слово</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <img src='img/author.jpg'>
      </img>
    </section>
    <section className="page__carusel"></section>
    <section className="page__edu">
      <div>
        <img className='edu1' src='img/edu1.jpg'></img>
        <img className = 'edu2' src='img/edu3.jpg'></img>
      </div>
      <div>
      <div className='hh_text'>
        <h5>Обучение</h5>
        <h2>Обучение</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="https://www.instagram.com/cheese_almaty/">Подробнее...</a>
        </div>
        <img className='edu3'src='img/edu4.jpg'></img>
      </div>
      </section>
    <section className="page_quote">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </section>
    <section className="page_shop">
      <div className='shop_left'>
        <img src='img/bg_shops.jpg'></img>
        <div className='hh_text'>
        <h5>Продукция</h5>
        <h2>Сыр</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a>К покупкам</a>
        </div>
      </div>
      <div className="card">
        <img src='img/bg_shops.jpg'></img>
        <div className='weight'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket'><svg src='img/shopping-cart.svg'></svg><a>В корзину</a></div>
      </div>
    </section>
    <section className="page__rate">
      <h2>Отзывы</h2>
      <div className='grade'>
        <div className="card__grade">
          <p>“Such a great product, feel safer walking my dog alone at dusk and for my teenage daughter to use too, everyone likes to have an extra piece of mind, especially in current times,
thank you 🐾💖”</p>
          <h2>Kate someone</h2>
        </div>
        <div className="card__grade">
          <p>“Such a great product, feel safer walking my dog alone at dusk and for my teenage daughter to use too, everyone likes to have an extra piece of mind, especially in current times,
thank you 🐾💖”</p>
          <h2>Kate someone</h2>
        </div>
        <div className="card__grade">
          <p>“Such a great product, feel safer walking my dog alone at dusk and for my teenage daughter to use too, everyone likes to have an extra piece of mind, especially in current times,
thank you 🐾💖”</p>
          <h2>Kate someone</h2>
        </div>
      </div>
    </section>
    <section className="page__faq">
      <span>FAQ</span>
      <h1></h1>
      <details>
        <summary>Заголовок спойлера</summary>
        Текст спойлера
      </details>
      <details>
        <summary>Заголовок спойлера</summary>
        Текст спойлера
      </details>
      <details>
        <summary>Заголовок спойлера</summary>
        Текст спойлера
      </details>
    </section>
    <footer>
      <div>
        <div>
          <li>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
          </li>
        </div>
        <div>
          <h5></h5>
          <div>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </footer>
    </div>
  );
}

export default App;
