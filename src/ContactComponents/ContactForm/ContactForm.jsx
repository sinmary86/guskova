import { useRef, useState } from 'react';
import { ModalOverlay } from '../../Modal/ModalOverlay';
import Form from 'react-bootstrap/Form';
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
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleShowModal = (key) => {
    setActiveModalKey(key);
    setShowModal(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
   
    const form = formRef.current;
    const isValid = form.checkValidity();

    if (!agreed) {
      setValidated(true);
      return;
    }

    if (!isValid) {
      setValidated(true);
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
          setValidated(false);
          setShowModal(true); 
          setActiveModalKey('success'); 
          setShowModal(true);
        } else {
          alert('Произошла ошибка при отправке. Попробуйте позже!');
        }
      })
      .catch(() => {
        alert('Ошибка сети. Попробуйте позже!');
      });
  };
      

  return (
    <section className={styles.container} id="contactForm">

        <h6>Оставьте Ваши контактные данные и мы свяжемся с Вами в кратчайшие сроки!</h6>
        
        <Form 
            noValidate
            ref={formRef}
            onSubmit={onSubmit} 
            className={`${styles.form} ${validated ? 'was-validated' : ''}`}>
          <Form.Group controlId="formGridName" className="d-flex justify-content-end align-items-end">
          <Form.Label className={styles.label}>Ваше имя:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
          
        </Form.Group>

        <Form.Group controlId="formGridEmail" className="d-flex justify-content-end align-items-end">
          <Form.Label className={styles.label}>Ваш email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`form-control-sm ${styles.input}`}
          />
         
        </Form.Group>

      <Form.Group className="d-flex justify-content-between align-items-end" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={styles.label}>Сообщение:</Form.Label>
        <Form.Control
          required
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`form-control-sm ${styles.input}`}
          style={{ backgroundColor: 'transparent' }}
        />
      </Form.Group>

      <Form.Group className="text-start" id="formGridCheckbox">
        <Form.Check
            required
            type="checkbox"
            className={styles.checkbox}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            isInvalid={!agreed && validated} // ручная проверка
            label={
              <span>
                Я согласен/согласна с{' '}
                <span className={styles.link} role="button" onClick={() => handleShowModal('privacy')}>
                  политикой конфиденциальности
                </span>{' '}
                и даю{' '}
                <span className={styles.link} role="button" onClick={() => handleShowModal('consent')}>
                  согласие на обработку персональных данных.
                </span>{' '}
              </span>
            }
          />
          
       </Form.Group>

        <button type="submit" className="btnMain">
          ОТПРАВИТЬ СООБЩЕНИЕ
        </button>

      <ModalOverlay 
          show={showModal} 
          onClose={() => setShowModal(false)} 
          activeKey={activeModalKey} />

      </Form>
      </section>
  );
};