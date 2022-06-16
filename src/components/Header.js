import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header>
        <Link to=""><p className='header-pic' href=""><img src="./logo.png" className = 'logo__pic' alt=""></img></p></Link>
        <div className='menu'>
        <ul className="header-link-all">
            <li><Link to="/#About"><p className="header-link" href="#About">О нас</p></Link></li>
            <li><a className="header-link" href="#Education">Обучение</a></li>
            <li><Link to="catalog"><p className="header-link" href="">Магазин</p></Link></li>
            <li><a className="header-link" href="#Faq">FAQ</a></li>
        </ul></div>
        
        <div className="header-link-left">
            
            <a onClick={props.onClickCart} className="header-link-left-basket"><img src="img/basket.svg" alt=""></img></a>
            <a className = "header-call" href="tel:+77774000771">СВЯЗАТЬСЯ С НАМИ</a>
            <a onClick={props.onClickHamburger}><img src='img/hamburger.svg' alt='hamburger' className='hamburger'></img></a>
        </div>
    </header>
    )
  }