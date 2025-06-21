import { Col, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

export const FooterSection = () => {
    return(

    <footer className={`${styles.footer}`}>
       
       
       
          <Row>

            <Col>
            <h6 className="copyright mb-1">© 2025 НАДЕЖДА ГУСЬКОВА. Все права защищены.</h6>
           
           <Row>
            <Col>
            <ul className="list-unstyled">
              <li><a href="#">Главная</a></li>
              <li><a href="#">Биография</a></li>
              <li><a href="#">Дискография</a></li>
            </ul>

            </Col>
             <Col>   
            <ul className="list-unstyled">
              <li><a href="#">Выступления</a></li>
              <li><a href="#">Теннис</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
            </Col> 
            </Row>
            </Col>
          
          <Col>
                   <h5 className="slogan">Голос, который тронет сердце</h5>
            <ul className="list-unstyled">
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Пользовательское соглашение</a></li>
            </ul>
          </Col>
         </Row>
    </footer>
 )
}