import styles from './MobileMenu.module.scss';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Info from '../Info';
import AppContext from '../context';

export const MobileMenu = (props) =>{
  
return(
    <div className={styles.overlay}>
        <div className={styles.drawer}>
            <div className={styles.mobileTop}>
                <Link to=""><img src="./logo.png" className = {styles.logoPic} alt=""></img></Link>
                <img src='img/closeMenu.svg' alt='close' onClick={props.onClose}></img>
            </div>
            <div className='mobMenu'>
            <ul>
                <li onClick={props.onClose}><Link to="/#About">О нас</Link></li>
                <li onClick={props.onClose}><a className="header-link" href="#Education">Обучение</a></li>
                <li onClick={props.onClose}><Link to="catalog">Магазин</Link></li>
                <li onClick={props.onClose}><a className="header-link" href="#Faq">FAQ</a></li>
            </ul></div>
        </div>
    </div>
    )
}