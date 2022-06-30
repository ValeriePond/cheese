import styles from './NotFound.module.scss';

export const NotFound = ({items, setItemOpened}) => {
    return(
        <div className={styles.notFound}>
            <img src='./img/notFound.png' alt='notFound'></img>
            <h1>Ничего не найдено</h1>
            <a>Вернуться на главную</a>
        </div>
    )
}
    
