export const Footer = (props) =>{
    return(
<footer>
      <div className='topSide'>
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
      <div className='bottomSide'>
        <p>Copyright C 2022 All Rights Reserved.</p>
        <div>
        <p>Privacy Policy</p>
        <p>Terms of Service</p></div>
      </div>
    </footer>
    )
}