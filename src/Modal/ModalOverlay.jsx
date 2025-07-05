import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.scss';
import { ModalData } from './ModalData';

export const ModalOverlay = ({ show, onClose, activeKey }) => {
  const content = ModalData.find(item => item.key === activeKey);

  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName={`modal-dialog-scrollable ${styles.modalWide}`}
      centered
      className={`${styles.modal} ${activeKey === 'success' ? styles.successModal : ''}`}
      aria-labelledby="custom-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="custom-modal-title">
          {content?.title || 'Информация'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ whiteSpace: 'pre-line' }}>
          {content?.text || 'Не удалось загрузить данные для отображения.'}
        </p>
      </Modal.Body>
    </Modal>
  );
};
