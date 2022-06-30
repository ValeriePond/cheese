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
                <Link to="/#About"><li onClick={props.onClose}>О нас</li></Link>
                <a className="header-link" href="#Education"><li onClick={props.onClose}>Обучение</li></a>
                <Link to="catalog"><li onClick={props.onClose}>Магазин</li></Link>
                <a className="header-link" href="#Faq"><li onClick={props.onClose}>FAQ</li></a>
            </ul></div>
        </div>
    </div>
    )
}