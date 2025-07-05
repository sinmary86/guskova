import { Col, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

export const FooterSection = () => {

  const currentYear = new Date().getFullYear();
  const copyrightYear =
    currentYear === 2025
      ? '2025'
      : `2025–${currentYear}`;

    return(

    <footer className={`${styles.footer}`}>
       
          <Row className="gy-4"> 

            <Col xs={12} lg={8}>
            <h6 className={styles.copyright}>© {copyrightYear} НАДЕЖДА ГУСЬКОВА. Все права защищены.</h6>
           
           <Row>
            <Col xs={6} className="d-flex flex-column gap-1">
           
              <a href="#mainSection">Главная</a>
              <a href="#aboutSection">Биография</a>
              <a href="#audioSection">Дискография</a>
        
            </Col>
             <Col xs={6} className="d-flex flex-column gap-1">   
              <a href="#performanceSection">Выступления</a>
              <a href="#tennisSection">Теннис</a>
              <a href="#contactSection">Контакты</a>
            </Col> 
            </Row>

            </Col>
          
          <Col xs={12} lg={4} className="d-flex flex-column align-items-center gap-3">
              <h5 className={styles.quote}>Голос, который тронет сердце</h5>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Согласие на обработку персональных данных</a>
              {/* <a href="#">Пользовательское соглашение</a> */}
        
          </Col>
         </Row>
    </footer>
 )
}