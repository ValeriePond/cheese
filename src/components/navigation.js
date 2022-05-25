export const Navigation = (props) => {
    return (
        <header>
        <a className="header-link" href=""><img src="./logo.png" className = "logo__pic" alt=""></img></a>
        <ul class="header-link-all">
            <li><a className="header-link" href="">О нас</a></li>
            <li><a className="header-link" href="">Обучение</a></li>
            <li><a className="header-link" href="">Магазин</a></li>
            <li><a className="header-link" href="">FAQ</a></li>
        </ul>
        <div className="header-link-left">
            <a href="" className="header-link-left-basket"><img src="img/basket.svg" alt=""></img></a>
            <a className = "header-call" href="tel:+77774000771">СВЯЗАТЬСЯ С НАМИ</a>
        </div>
    </header>
    )
  }