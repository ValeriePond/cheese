import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header>
        <Link to="/"><p className='header-pic' href=""><img src="logo.png" className = 'logo__pic' alt=""></img></p></Link>
        <div className='menu'>
        <ul className="headerLinkAll">
            <li className="headerLink"><Link to="/">О нас</Link></li>
            <li className="headerLink"><a href="whatsapp://send?phone=77774000771&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%2F%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%2F%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81.">Обучение</a></li>
            <li className="headerLink"><Link to="/catalog">Магазин</Link></li>
            <li className="headerLink"><a href="Faq">FAQ</a></li>
        </ul></div>
        
        <div className="header-link-left">
            
            <a onClick={props.onClickCart} className="header-link-left-basket"><img src="img/basket.svg" alt=""></img></a>
            <a className = "header-call" href="whatsapp://send?phone=77774000771&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D1%8B%D1%80.">СВЯЗАТЬСЯ С НАМИ</a>
            <a onClick={props.onClickHamburger}><img src='img/hamburger.svg' alt='hamburger' className='hamburger'></img></a>
        </div>
    </header>
    )
  }