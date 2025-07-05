import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavbarApp.module.scss';
import logo from '../assets/logo.png';
import burgerIcon from '../assets/icon-menu.png';
import { useState } from 'react';

export const NavbarApp = () => {

  const [show, setShow] = useState(false);

  const handleCloseNav = () => setShow(false);
  const handleShowNav = () => setShow(true);

  return (
        <Navbar sticky="top" expand="lg" className={styles.navContainer}>
            <Navbar.Brand href="#mainSection">
                <img
                    src={logo}
                    alt="Логотип"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${styles.navToggle}`} onClick={handleShowNav}>
             <img src={burgerIcon} alt="меню" /> 
             </Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className={styles.offcanvas}
              show={show}
              onHide={handleCloseNav}
            >
              <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 ${styles.navLinksContainer}`} onClick={handleCloseNav}>
                  <Nav.Link href="#mainSection">ГЛАВНАЯ</Nav.Link>
                  <Nav.Link href="#aboutSection">БИОГРАФИЯ</Nav.Link>
                  <Nav.Link href="#audioSection">ДИСКОГРАФИЯ</Nav.Link>
                  <Nav.Link href="#performanceSection">ВЫСТУПЛЕНИЯ</Nav.Link>
                  <Nav.Link href="#tennisSection">ТЕННИС</Nav.Link>
                  <Nav.Link href="#contactSection">КОНТАКТЫ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
  );
}