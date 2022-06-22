export const Footer = (props) =>{
    return(
<footer>
      <div className='topSide'>
        <div>
          <ul>
            <li className='menu'>Меню</li>
            <li>О нас</li>
            <li>Связаться с нами</li>
            <li>Контакты</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className='menu'>Мы в социальных сетях</h1>
          <div className='image'>
            <a href="https://www.instagram.com/cheese_almaty/"><img src='img/Instagram.svg' alt="inst"></img></a>
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