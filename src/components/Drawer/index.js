import styles from './Drawer.module.scss';
export const Drawer = ({ onClose, onRemove, items = []}) =>{
  
return(
  <div className={styles.overlay}>
  <div className={styles.drawer}>
            <div className='d-flex justify-between'>
            <h2 className='mt-10 mb-20'>Корзина</h2>
            <img  className="mt-10 mb-20 removeBtn cu-p" onClick={onClose} src='img/delete.svg' alt='img'></img>
            </div>
            <div className={styles.items}>
              {items.map((obj) => (
              <div key={obj.id} className={styles.cartItem}>
                <img className={styles.cartItemImg} width={80} hight={80} src={obj.imageUrl} alt='basketimg'></img>
                <div  className='mr-20 ml-20'>
                  <h5 className='mb-5 mt-5'>{obj.title}</h5>
                  <p className='mt-15 mb-5'>{obj.count} гр</p>
                  <b>{obj.price} KZT</b>
                </div>
                <img className="m-20 removeBtn cu-p" src='img/delete.svg' alt='img' onClick={() => onRemove(obj.id)}></img>
              </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <span>Итого:</span>
              <div></div>
              <b>4 000 KZT</b>
            </div>
            <button>Оформить заказ</button>
</div>
          </div>
)
}