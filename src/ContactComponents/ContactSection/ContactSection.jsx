import { ContactForm } from '../ContactForm/ContactForm.jsx';
import styles from './ContactSection.module.scss';
import { Row, Col } from 'react-bootstrap';
import VK from '../../assets/VCIcon.png';
import telegram from '../../assets/telegramIcon.png';
import dzen from '../../assets/dzenIcon.png';


export const ContactSection = () => {
  return (
    <section id="contactSection" className={styles.contactSection}>
        <Row className={styles.row}>
          <Col
            xs={12}
            lg={6}
            className={`${styles.textCol} d-flex flex-column justify-content-center`}
          >
              <h2 className={styles.heading}>КОНТАКТЫ</h2>
             
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
    <img src={dzen} alt="Дзен" className={styles.icon} />
    nadezdaguskova
  </a>


   <p className='w-75'>
    Мы представлены в социальных сетях — присоединяйтесь и пишите при необходимости.
    Для индивидуальных обращений используйте форму обратной связи.
  </p>

          </Col>

          <Col xs={12} lg={6} className="d-flex flex-column justify-content-center"> 
            <ContactForm />
          </Col>
        </Row>
    </section>
  );
};
