import React, { useEffect, KeyboardEvent } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={imageUrl}
        alt="Large image"
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
