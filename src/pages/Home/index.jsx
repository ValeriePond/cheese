
import styles from './Home.module.scss';

import { Item } from "../../components/Item";
import { Slider } from '../../components/Slider';

import React from 'react'; 

export const Home = ({items,onAddToCart, setItemOpened, onShowItem}) => {
    return(
    <div>
        <section className={"pageTop " + styles.homeTop}>
        <h1>СЫРИУС</h1>
        <p >Крафтовая семейная сыроварня</p>
        <a  href="About">Подробнее</a>
    </section>
    <section className={styles.pageList}>
        <h2>Вкусный</h2>
        <h2 className={styles.list}> 100% Натурально</h2>
        <h2>Свежий</h2>
    </section>
<div className='mainSection'><section className={styles.pageAbout} id="About">
      <div className='hhText'>
        <h5>О нас</h5>
        <h2>Добро Пожаловать!</h2>
        <p>Нашей сыроварне уже более пяти лет. Название «Сыриус» происходит от самой яркой звезды Сириус. Секрет наших сыров – уникальность, экологичность и частичка души. Концепция сыроварни – только натуральные ингредиенты, без присадок и консервантов. А ассортимент построен так, чтобы он отличался от магазинной продукции и был разнообразным. Каждый тут найдет что-то для себя.</p>
      </div>
      <img src='img/author.jpg' alt='author'></img>
    </section>
     <section className="pageCarusel">
      <Slider/>
    </section> 
    <section className={styles.imageBetween}><img src="img/line.jpg" alt="" /></section>
    <section className={styles.pageEdu} id="Education">
        <img src='img/edu1.jpg' alt='edu'></img>
      <div>
      <div className='hhText'>
        <h5>Обучение</h5>
        <h2>Как сделать сыр дома?</h2>
        <p>С этого вопроса все начинается. На нашем обучении вы узнаете полный процесс изготовления сыра в домашних условиях, а также список всего необходимого оборудования и ингредиентов, которые вам могут понадобиться для домашнего сыроделия. Сделать сыр самому просто, попробуйте!</p>
        <a href="https://www.instagram.com/cheese_almaty/">Подробнее...</a>
        </div>
      </div>
      </section>
    <section className={styles.pageQuote}>
    <i>«Обед, не заканчивающийся вкусным сыром, подобен красивой женщине с одним глазом»</i> <br/> Жан Антельм Брийя-Саварен
    </section>
    <section className={styles.pageShop}>
      <div className={styles.shopLeft}>
        <div className='hhText'>
        <h5>Продукция</h5>
        <h2>Наш Сыр</h2>
        <p>Сортов и разновидностей сыра в мире великое множество, каждый обладает своим собственным уникальным вкусом и ароматом. Хотите попробовать каждый из них? В нашей сыроварне представлено более 30 сортов сыра.</p>
        <a href="https://www.instagram.com/cheese_almaty/">К покупкам</a>
        </div>
      </div>
      <div className='catalogItems'>{
      items.map((item) => (
      <Item key={item.index} imageUrl={item.imageUrl} title={item.title} price={item.price} description={item.description} onCart={(obj) => onAddToCart(obj)} id={item.id} onClickItem= {() => setItemOpened(true)} onShow={(obj) => onShowItem(obj)}/>
      ))[5]}</div>
      
    </section>
    <section className={styles.pageRate}>
      <h2>Отзывы</h2>
      <div className={styles.grade}>
        <div className={styles.cardGrade}>
          <p>“Приятный вкус, хороший аромат, легко режется, не липнет к ножику, не рассыпается”</p>
          <h2>Катя</h2>
        </div>
        <div className={styles.cardGrade}>
          <p>“Мне сыр понравился. Первый раз пробовала Чеддер, раньше думала он острый или чересчур пряный, а он оказался нежным и потрясающе вкусным.”</p>
          <h2>Сабина</h2>
        </div>
      </div>
    </section></div>
    </div>
    )
}