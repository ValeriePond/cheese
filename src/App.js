import './main.scss';
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{display:'none'}} className='overlay'>
        <div className='drawer'>
          <div className='d-flex justify-between'>
          <h2 className='mt-10 mb-20'>Корзина</h2>
          <img  className="mt-10 mb-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='items'>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          <div className='cartItem mb-10'>
            <img className="m-10 cartItem_img" width={80} hight={80} src='img/bg_shops.jpg' alt='cheese'></img>
            <div  className='mr-20 ml-20'>
              <h5 className='mb-5 mt-5'>Гауда</h5>
              <p className='mt-15 mb-5'>200 гр</p>
              <b>2 000 KZT</b>
            </div>
            <img  className="m-20 removeBtn cu-p" src='img/delete.svg'></img>
          </div>
          </div>
          <div className='cartTotalBlock'>
            <span>Итого:</span>
            <div></div>
            <b>4 000 KZT</b>
          </div>
          <button>Оформить заказ</button>

        </div>
      </div>
      <section className="page__top">
        <h1 className="page__top-head">СЫРИУС</h1>
        <p className="page__top-p">Крафтовая семейная сыроварня</p>
        <a className="page__top-b" href="#">Подробнее</a>
    </section>
    <section className="page__list">
        <h2>Вкусный</h2>
        <h2 className="list list-2"> 100% Натурально</h2>
        <h2>Свежий</h2>
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
        <img src='img/edu1.jpg'></img>
      <div>
      <div className='hh_text'>
        <h5>Обучение</h5>
        <h2>Обучение</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="https://www.instagram.com/cheese_almaty/">Подробнее...</a>
        </div>
      </div>
      </section>
    <section className="page_quote">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </section>
    <section className="page_shop">
      <div className='shop_left'>
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <div className='hh_text'>
        <h5>Продукция</h5>
        <h2>Сыр</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <a href="https://www.instagram.com/cheese_almaty/">К покупкам</a>
        </div>
      </div>

      <div className="catalog-item">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog'>
          <h3>1 000 KZT</h3>
          <p> за 100 гр</p>
        </div>
        <div className='weight'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket'><img className='cart-img' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p className='more'>Подробнее</p>
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
    <section className='top-catalog'>
      <h1>Каталог товаров</h1>
    </section>
    <section className='catalog-hit'>
      <h1>Лидер продаж</h1>
      <div className='leader-card'>
        <img className='img_left' src='img/bg_shops.jpg'></img>
        <div className='card-leftSide'>
          <h2>Козий Мааздам</h2>
          <div className='price-catalog'>
            <h3>1 000 KZT</h3>
            <p>за 100 гр</p>
          </div>
          <details>
        <summary>Подробнее</summary>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis duis ullamcorper id quisque ultrices sed porta proin. Lectus eros lacus nunc nisl nunc nulla condimentum ut libero. Justo vitae enim ut praesent condimentum dignissim porttitor molestie odio. Dolor mauris nisl neque urna id et. Eu integer mi pellentesque porttitor mi magna semper. Vitae fermentum cras ut scelerisque sit praesent id facilisis quisque. A sodales tellus sapien ornare nibh condimentum venenatis, semper bibendum.
        </div></details>
        <div className='hit-price'>
        <div className='weight'>
            <button>-</button>
            <p>100 гр</p>
            <button>+</button>
          </div>
        <div className='basket'><img src='img/shopping-cart.svg'></img><a>В корзину</a></div></div>
        <div className='card-images'>
        <img src='img/bg_shops.jpg'></img>
        <img src='img/bg_shops.jpg'></img>
        <img src='img/bg_shops.jpg'></img>
        </div>
        </div>
      </div>
    </section>
    <section className='catalog-section'>
      <h1>Каталог</h1>
      <div className='dropdown'>
        <button className="dropbtn">Сортировать по: </button>
        <div className="dropdown-content">
          <p href="#">Названию А-Я</p>
          <p href="#">Названию Я-А</p>
          <p href="#">Цене 1-9</p>
          <p href="#">Цене 9-1</p>
        </div>
      </div>
      <div className='catalog-items'>
      <div className="catalog-item_mini">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog_mini'>
          <h3>1 000 KZT</h3>
          <p  className='more_mini'> за 100 гр</p>
        </div>
        <div className='weight_mini'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket_mini'><img className='cart-img_mini' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p  className='more_mini'>Подробнее</p>
      </div>
      <div className="catalog-item_mini">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog_mini'>
          <h3>1 000 KZT</h3>
          <p  className='more_mini'> за 100 гр</p>
        </div>
        <div className='weight_mini'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket_mini'><img className='cart-img_mini' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p  className='more_mini'>Подробнее</p>
      </div>
      <div className="catalog-item_mini">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog_mini'>
          <h3>1 000 KZT</h3>
          <p  className='more_mini'> за 100 гр</p>
        </div>
        <div className='weight_mini'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket_mini'><img className='cart-img_mini' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p  className='more_mini'>Подробнее</p>
      </div>
      <div className="catalog-item_mini">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog_mini'>
          <h3>1 000 KZT</h3>
          <p  className='more_mini'> за 100 гр</p>
        </div>
        <div className='weight_mini'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket_mini'><img className='cart-img_mini' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p  className='more_mini'>Подробнее</p>
      </div>
      <div className="catalog-item_mini">
        <img src='img/bg_shops.jpg' alt='cheese'></img>
        <h2>Козий Мааздам</h2>
        <div className='price-catalog_mini'>
          <h3>1 000 KZT</h3>
          <p  className='more_mini'> за 100 гр</p>
        </div>
        <div className='weight_mini'>
          <button>-</button>
          <p>100 гр</p>
          <button>+</button>
        </div>
        <div className='basket_mini'><img className='cart-img_mini' src='img/shopping-cart.svg'></img><a>В корзину</a></div>
        <p  className='more_mini'>Подробнее</p>
      </div>
      
      </div>
    </section>
    <div className='name_plate'>Сырное Ассорти</div>
    <section className='catalog-plate'>
    <img className='img_circle' src='img/bg_shops.jpg'></img>
    <div className='left_plate'>
      <h3>Выбор недели</h3>
      <ol type="1">
        <li>Мааздам</li>
        <li>Белпер Кнолле</li>
        <li>Гауда</li>
        <li>Шаурс</li>
        <li>Чечил</li>
      </ol>
      <div className='basket'><img src='img/shopping-cart.svg'></img><a>В корзину</a></div>
    </div>
    </section>
    </div>
    
  );
}

export default App;
