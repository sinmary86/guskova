import styles from './MainSection.module.scss';
import experience from '../assets/12years.png';


export const MainSection = () => {
    return(
      <section className={styles.mainSection}>
            <div className={styles.contentContainer}> 

            <div className={styles.headerBlock}>
                <img src={experience} className={styles.experience} alt="12 лет опыта" />
                <h3>Singer</h3>
            </div>

            <h1>НАДЕЖДА <br />
                ГУСЬКОВА
            </h1>

            <button className={styles.btn}>ЗАКАЗАТЬ ВЫСТУПЛЕНИЕ</button>
        </div>
        </section>
    )
}