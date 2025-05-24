import React from 'react';
import { UnsplashImage } from '../../types/image';
import styles from './ImageGalleryItem.module.css';

interface ImageGalleryItemProps {
  image: UnsplashImage;
  onImageClick: (largeImageUrl: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onImageClick,
}) => {
  const handleClick = () => {
    onImageClick(image.urls.full);
  };

  return (
    <div className={styles.imageCard} onClick={handleClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        className={styles.image}
      />
    </div>
  );
};

export default ImageGalleryItem;
