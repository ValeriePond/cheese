import styles from './Drawer.module.scss';
import axios from 'axios';
import React from 'react';

import Info from '../Info';
import AppContext from '../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = ({ onClose, onRemove, items = []}) =>{

  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const totalPrice = cartItems.reduce((sum, obj) => ((obj.title === 'Белпер Кнолле' || obj.title === 'Лабне'|| obj.title === 'Сырное ассорти') ? ((obj.price*100 * (obj.count-100)/100) / 100 + sum):((obj.price * obj.count) / 100 + sum)), 0);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post('https://6298d5d6f2decf5bb74cc366.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
  };
  
return(
  <div className={styles.overlay}>
  <div className={styles.drawer}>
            <div className='d-flex justify-between'>
            <h2 className='mt-10 mb-20'>Корзина</h2>
            <img  className="mt-10 mb-20 removeBtn cu-p" onClick={onClose} src='img/delete.svg' alt='img'></img>
            </div>
            {!! items.length ? (<div>
            <div className={styles.items}>
              {items.map((obj) => (
              <div key={obj.id} className={styles.cartItem}>
                <img className={styles.cartItemImg} width={80} hight={80} src={obj.imageUrl} alt='basketimg'></img>
                <div  className='ml-20'>
                  <h5 className='mb-5 mt-5'>{obj.title}</h5>{(obj.title === 'Белпер Кнолле' || obj.title === 'Лабне' || obj.title === 'Сырное ассорти') ?
                  (<p className='mt-15 mb-5'>{(obj.count-100)/100} шт</p>) :
                  (<p className='mt-15 mb-5'>{obj.count} гр</p>)
                  }<b>{obj.price} KZT</b>
                </div>
                <img className="m-20 removeBtn cu-p" src='img/delete.svg' alt='img' onClick={() => onRemove(obj.id)}></img>
              </div>
              ))}
            </div>
            
            <div className={styles.cartTotalBlock}>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} Тг</b>
            </div>
            <button onClick={onClickOrder}>Оформить заказ</button></div>) : 
            (<Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Ваша корзина грустит, в ней пусто'
            }
            image={isOrderComplete ? 'img/order.svg' : 'img/emptyCart.png'}
          />)}
</div>
          </div>
)
}