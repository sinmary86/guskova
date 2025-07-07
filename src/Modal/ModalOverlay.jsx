import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.scss';
import { ModalData } from './ModalData';

export const ModalOverlay = ({ show, onClose, activeKey }) => {

  const item = ModalData.find(item => item.key === activeKey);

  const moveToMain = () => {
    onClose();
    setTimeout(() => {
      const section = document.getElementById('mainSection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName={styles.modal}
      contentClassName={activeKey === 'success' ? styles.successModal : ''}
      centered
    >
       <Modal.Header
  closeButton
  className={activeKey === 'success' ? styles.modalHeaderNoBorder : ''}
>
  {item?.title && <Modal.Title>{item.title}</Modal.Title>}
</Modal.Header>

      <Modal.Body>
        {activeKey === 'success' ? (
    <div className={`text-center ${styles.successContainer}`}>
      <h5 className="mb-3">Спасибо!</h5>
      <p className="text-center">
        Ваша заявка отправлена. <br />
        Уже очень скоро мы свяжемся с Вами!
      </p>
      <button
        className="btnMain btnMain--modal"
        onClick={moveToMain}
      >
        НА ГЛАВНУЮ
      </button>
    </div>
  ) : (
    item?.content || (
      <p style={{ whiteSpace: 'pre-line' }}>
        Не удалось загрузить данные для отображения.
      </p>
    )
  )}
      </Modal.Body>
    </Modal>
  );
};
