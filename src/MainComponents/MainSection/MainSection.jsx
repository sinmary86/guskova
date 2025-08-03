import styles from './MainSection.module.scss';
import { ExperienceCircle } from '../ExperienceCircle/ExperienceCircle';
import '../../styles/button.scss';



export const MainSection = () => {

   const moveToContactForm = () => {
    const contactSection = document.getElementById('contactForm');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


    return(
      <section id="mainSection" className={styles.mainSection}>
            <div className={styles.contentContainer}> 

            <div className={styles.headerBlock}>
                <ExperienceCircle />
                <h3>Певица</h3>
            </div>

            <h1>НАДЕЖДА <br />
                ГУСЬКОВА
            </h1>

            <button className="btnMain" onClick={moveToContactForm}>ЗАКАЗАТЬ ВЫСТУПЛЕНИЕ</button>
        </div>
        </section>
    )
  }