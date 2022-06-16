export const Plate = ({onCart}) =>{
    return(<section>
        <div className='namePlate'>Сырное Ассорти</div>
     <div className='catalogPlate'>
    <img className='imgCircle' src='img/plate.jpg'></img>
     <div className='leftPlate'>
      <div className='priceCatalog'><h3>9 000 KZT</h3></div> 
      <ol type="1">
        <li>Мааздам</li>
        <li>Белпер Кнолле</li>
        <li>Гауда</li>
        <li>Шаурс</li>
        <li>Чечил</li>
      </ol> 
      <div className='basket' onClick={onCart}><img src='img/shopping-cart.svg'></img><a>В корзину</a></div>
    </div> 
    </div>
    </section>
    )
}