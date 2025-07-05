import styles from './MainSection.module.scss';
import { ExperienceCircle } from '../ExperienceCircle/ExperienceCircle';
import '../../styles/button.scss';



export const MainSection = () => {
    return(
      <section id="mainSection" className={styles.mainSection}>
            <div className={styles.contentContainer}> 

            <div className={styles.headerBlock}>
                <ExperienceCircle />
                <h3>Singer</h3>
            </div>

            <h1>НАДЕЖДА <br />
                ГУСЬКОВА
            </h1>

            <button className="btnMain">ЗАКАЗАТЬ ВЫСТУПЛЕНИЕ</button>
        </div>
        </section>
    )
}