import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavbarApp.module.scss';
import logo from '../assets/logo.png';

//TODO добавить навигацию 

export const NavbarApp = () => {
  return (
        <Navbar sticky="top" expand="lg" className={styles.navContainer}>
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    alt="Логотип"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${styles.navToggle}`} />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className={styles.offcanvas}
            >
              <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 ${styles.navLinks}`}>
                  <Nav.Link href="#action1">ГЛАВНАЯ</Nav.Link>
                  <Nav.Link href="#action2">БИОГРАФИЯ</Nav.Link>
                  <Nav.Link href="#action1">ДИСКОГРАФИЯ</Nav.Link>
                  <Nav.Link href="#action2">ВЫСТУПЛЕНИЯ</Nav.Link>
                  <Nav.Link href="#action1">ТЕННИС</Nav.Link>
                  <Nav.Link href="#action2">КОНТАКТЫ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
  );
}