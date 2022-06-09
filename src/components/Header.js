import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header>
        <Link to="/"><a className='header-pic' href=""><img src="./logo.png" className = 'logo__pic' alt=""></img></a></Link>
        <ul className="header-link-all">
            <li><a className="header-link" href="">О нас</a></li>
            <li><a className="header-link" href="">Обучение</a></li>
            <li><Link to="/catalog"><a className="header-link" href="">Магазин</a></Link></li>
            <li><a className="header-link" href="">FAQ</a></li>
        </ul>
        <div className="header-link-left">
            <a onClick={props.onClickCart} className="header-link-left-basket"><img src="img/basket.svg" alt=""></img></a>
            <a className = "header-call" href="tel:+77774000771">СВЯЗАТЬСЯ С НАМИ</a>
        </div>
    </header>
    )
  }