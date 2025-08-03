import styles from './ContactInfo.module.scss';
import VK from '../../assets/vk-icon.svg';
import telegram from '../../assets/telegram-icon.svg';
import dzen from '../../assets/yandex-dzen-icon.svg';
import musikYandex from '../../assets/icon-yandex-music.png';


export const ContactInfo = () => {
  return (
    <div className={styles.container}>
        <h2>КОНТАКТЫ</h2>

        <div className={styles.linksCol}>            
        <a
            href="https://vk.com/nadezda_guskova"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
        >
            <img src={VK} alt="VK" className={styles.icon} />
            nadezda_guskova
        </a>


        <a
            href="https://t.me/nadezda_guskova"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
        >
            <img src={telegram} alt="Телеграм" className={styles.icon} />
            nadezda_guskova
        </a>


        <a
            href="https://dzen.ru/nadezdaguskova?share_to=link" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
        >
            <img src={dzen} alt="Дзен" className={styles.icon} />
            nadezdaguskova
        </a>

        <a
            href="https://yappy.media/n/nadezdaguskova" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
        >
            <img src={musikYandex} alt="Яндекс музыка" className={styles.icon} />
            nadezdaguskova
        </a>
        </div> 


        <p className={styles.text}>
            Мы представлены в социальных сетях — присоединяйтесь и пишите при необходимости.
            Для индивидуальных обращений используйте форму обратной связи.
        </p>
    </div>
  );
};
