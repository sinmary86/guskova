import { Col, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear === 2025 ? "2025" : `2025–${currentYear}`;

  return (
    <footer className={styles.footer}>
      <Row>
        <Col xs={12} lg={6}>
          <h6 className={styles.copyright}>
            © {copyrightYear} НАДЕЖДА ГУСЬКОВА. Все права защищены.
          </h6>

          <Row>
            <Col xs={4} className="d-flex flex-column gap-1">
              <a href="#mainSection">Главная</a>
              <a href="#aboutSection">Биография</a>
            </Col>

            <Col xs={4} className="d-flex flex-column gap-1">
              <a href="#audioSection">Дискография</a>
              <a href="#performanceSection">Выступления</a>
            </Col>

            <Col xs={4} className="d-flex flex-column gap-1">
              <a href="#tennisSection">Теннис</a>
              <a href="#contactSection">Контакты</a>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column align-items-center gap-1"
        >
          <h5 className={styles.quote}>Голос, который тронет Ваше сердце</h5>
        </Col>
      </Row>
    </footer>
  );
};
