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
          <p>“Приятный вкус, хороший аромат, легко режется, не липнет к ножику, не рассыпается”</p>
          <h2>Катя</h2>
        </div>
        <div className="card__grade">
          <p>“Мне сыр понравился. Первый раз пробовала Чеддер, раньше думала он острый или чересчур пряный, а он оказался нежным и потрясающе вкусным.”</p>
          <h2>Сабина</h2>
        </div>
        <div className="card__grade">
          <p>"Чувcтвуeтcя пpиятный, нeжный cливoчный вкуc. В мepу coлeный. Пo кoнcиcтeнции тo, чтo нaдo, мягкий и плoтный, нe paзвaливaeтcя. Вкуc кoзьeгo мoлoкo в cocтaвe oщущaeтcя."</p>
          <h2>Лера</h2>
        </div>
      </div>
    </section>
    <section className="page__faq">
      <p>FAQ</p>
      <h1>Часто задаваемые вопросы</h1>
      <details open>
        <summary>Как сделать заказ?</summary>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis duis ullamcorper id quisque ultrices sed porta proin. Lectus eros lacus nunc nisl nunc nulla condimentum ut libero. Justo vitae enim ut praesent condimentum dignissim porttitor molestie odio. Dolor mauris nisl neque urna id et. Eu integer mi pellentesque porttitor mi magna semper. Vitae fermentum cras ut scelerisque sit praesent id facilisis quisque. A sodales tellus sapien ornare nibh condimentum venenatis, semper bibendum.
      </div></details>
      <details>
        <summary>Есть ли у вас доставка?</summary>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis duis ullamcorper id quisque ultrices sed porta proin. Lectus eros lacus nunc nisl nunc nulla condimentum ut libero. Justo vitae enim ut praesent condimentum dignissim porttitor molestie odio. Dolor mauris nisl neque urna id et. Eu integer mi pellentesque porttitor mi magna semper. Vitae fermentum cras ut scelerisque sit praesent id facilisis quisque. A sodales tellus sapien ornare nibh condimentum venenatis, semper bibendum.
      </div></details>
      <details>
        <summary>Есть ли у вас самовывоз?</summary>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis duis ullamcorper id quisque ultrices sed porta proin. Lectus eros lacus nunc nisl nunc nulla condimentum ut libero. Justo vitae enim ut praesent condimentum dignissim porttitor molestie odio. Dolor mauris nisl neque urna id et. Eu integer mi pellentesque porttitor mi magna semper. Vitae fermentum cras ut scelerisque sit praesent id facilisis quisque. A sodales tellus sapien ornare nibh condimentum venenatis, semper bibendum.
      </div></details>
      <div className='emptyline'></div>
    </section>
    <footer>
      <div className='top_side'>
        <div>
          <li>
            <ul className='menu'>Меню</ul>
            <ul>О нас</ul>
            <ul>Связаться с нами</ul>
            <ul>Контакты</ul>
            <ul>FAQ</ul>
          </li>
        </div>
        <div>
          <h1 className='menu'> Соц Сети</h1>
          <div className='image'>
            <img src='img/Instagram.svg'></img>
            <img src='img/YouTube.svg'></img>
            <img src='img/TikTok.svg'></img>
          </div>
        </div>
      </div>
      <div className='bottom_side'>
        <p>Copyright C 2022 All Rights Reserved.</p>
        <div>
        <p>Privacy Policy</p>
        <p>Terms of Service</p></div>
      </div>
    </footer>
    </div>
  );
}

export default App;
