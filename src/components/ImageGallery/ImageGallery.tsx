import React from 'react';
import { UnsplashImage } from '../../types/image.ts';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick?: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Image'}
            onClick={
              onImageClick
                ? () => onImageClick(image.urls.full)
                : undefined
            }
            className={styles.imageGalleryItemImage}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
