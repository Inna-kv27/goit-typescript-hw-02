// src/components/ImageGalleryItem/ImageGalleryItem.tsx
import React from 'react';
import { Image } from '../../types/image'; // Імпортуємо інтерфейс Image

interface ImageGalleryItemProps {
  image: Image;
  onImageClick: (largeImageUrl: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onImageClick,
}) => {
  const handleClick = () => {
    onImageClick(image.largeImageURL);
  };

  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
