import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { UnsplashImage } from '../../types/image';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (largeImageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageGalleryItem
            image={image}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
