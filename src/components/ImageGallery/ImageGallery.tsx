import ImageCard from '../ImageCard/ImageCard.tsx';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard
            webformatURL={image.urls.small}
            largeImageURL={image.urls.regular}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.full)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
