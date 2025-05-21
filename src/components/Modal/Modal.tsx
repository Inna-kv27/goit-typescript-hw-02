import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ imageUrl, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      onKeyDown={handleKeyDown}
    >
      <img
        src={imageUrl}
        alt=""
        className={styles.modalImage}
      />
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
