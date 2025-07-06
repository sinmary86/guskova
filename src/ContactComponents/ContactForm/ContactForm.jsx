import { useState } from 'react';
import { ModalOverlay } from '../../Modal/ModalOverlay';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import styles from './ContactForm.module.scss';

//TODO - заменить данные пароля на клиента https://formcarry.com/
//TODO - добавить ссылку на яндекс музыку + дзен + иконки

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeModalKey, setActiveModalKey] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowModal = (key) => {
    setActiveModalKey(key);
    setShowModal(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setShowAlert(true);
      return;
    }

    fetch('https://formcarry.com/s/iILT8ABeZaa', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setName('');
          setEmail('');
          setMessage('');
          setAgreed(false);
          setShowAlert(false);
        } else {
          setShowAlert(true);
        }
      })
      .catch(() => setShowAlert(true));
  };

  return (
  
    <div className={styles.container}>
        <h6>Оставьте свои контактные данные и мы свяжемся с Вами в кратчайшие сроки!</h6>
        
        <Form onSubmit={onSubmit} className={`${styles.form}`}>
          <Form.Group controlId="formGridName" className="d-flex justify-content-between align-items-center">
          <Form.Label className={`text-end ${styles.label}`}>Ваше имя:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
        </Form.Group>

        <Form.Group controlId="formGridEmail" className="d-flex justify-content-between align-items-center">
          <Form.Label className={styles.label}>Ваш email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
        </Form.Group>

      <Form.Group className="d-flex justify-content-between align-items-center" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={styles.label}>Сообщение:</Form.Label>
        <Form.Control
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={`form-control-sm ${styles.input}`}
          style={{ backgroundColor: 'transparent' }}
        />
      </Form.Group>

      <Form.Group className="text-start" id="formGridCheckbox">
        <Form.Check
            type="checkbox"
            className={styles.checkbox}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            label={
              <span>
                Я согласен с{' '}
                <span className={styles.link} role="button" onClick={() => handleShowModal('privacy')}>
                  политикой конфиденциальности
                </span>{' '}
                и даю{' '}
                <span className={styles.link} role="button" onClick={() => handleShowModal('consent')}>
                  согласие на обработку персональных данных
                </span>{' '}
                в соответствии с{' '}
                <span className={styles.link} role="button" onClick={() => handleShowModal('terms')}>
                  правилами пользования сайтом
                </span>.
              </span>
            }
          />
      </Form.Group>

      {showAlert && (
        <Alert variant="danger">Пожалуйста, согласитесь с политикой конфиденциальности.</Alert>
      )}

  <button type="submit" className="btnMain">
    ОТПРАВИТЬ СООБЩЕНИЕ
  </button>

      <ModalOverlay show={showModal}
                    onClose={() => setShowModal(false)}
                    activeKey={activeModalKey} />
      </Form>
      </div>
  );
};