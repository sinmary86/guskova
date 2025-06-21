import { useState } from 'react';
import { ModalOverlay } from '../Modal/ModalOverlay';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import styles from './ContactForm.module.scss';

//TODO - заменить данные пароля на клиента https://formcarry.com/

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
    <div className={`d-flex flex-column gap-4 ${styles.formSection}`}>
    <div className={`mb-3 text-start ${styles.text}`}>
    <h4>Оставьте свои контактные данные, и мы перезвоним 
вам в течении 24 часов</h4>
     </div>
    <Form onSubmit={onSubmit} className="d-flex flex-column gap-4">
          <Form.Group as={Col} controlId="formGridName" className="d-flex align-items-center gap-2">
          <Form.Label className={styles.label}>Ваше имя:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail" className="d-flex align-items-center gap-2">
          <Form.Label className={styles.label}>Ваш email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
        </Form.Group>

      <Form.Group className="d-flex align-items-center gap-2" controlId="exampleForm.ControlTextarea1">
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

      <Form.Group className="mb-3 text-start" id="formGridCheckbox">
        <Form.Check
            type="checkbox"
            className={styles.span}
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

      <div className="text-start">
  <button type="submit" className={styles.buttonStyle}>
    Отправить
  </button>
</div>

      <ModalOverlay show={showModal}
                    onClose={() => setShowModal(false)}
                    activeKey={activeModalKey} />
    </Form>
   </div>
  );
};