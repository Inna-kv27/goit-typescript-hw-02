import React from 'react';
import styles from './Modal.module.css';
interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  onClose,
}) => {
  // console.log("ImageModal props:", imageUrl); // Для налагодження
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Large image"
        style={{ maxWidth: '90%', maxHeight: '90%' }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        X
      </button>
    </div>
  );
};

export default ImageModal;
