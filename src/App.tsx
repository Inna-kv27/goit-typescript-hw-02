import { useState, useEffect, useCallback } from 'react';

import SearchBar from './components/SearchBar/SearchBar.tsx';
import ImageGallery from './components/ImageGallery/ImageGallery.tsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.tsx';
import Button from './components/Button/Button.tsx';
// З цих рядків видалено імпорти, оскільки вони, імовірно, створювали проблеми після видалення бібліотек.
// import ImageModal from './components/Modal/Modal.tsx';
// import Loader from './components/Loader/Loader.tsx';

// import { fetchImages } from './services/api.ts';
// import {
//   UnsplashImage,
//   UnsplashApiResponse,
// } from './types/image.ts';
import styles from './App.module.css';

type Status = 'idle' | 'pending' | 'resolved' | 'rejected';

function App() {
  const [query, setQuery] = useState<string>('');
  // const [images, setImages] = useState<UnsplashImage[]>([]);
  // const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // Стейт для модального вікна та зображення видалено, оскільки модальне вікно тимчасово відключено
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [modalImage, setModalImage] = useState<string>('');

  // const [totalPages, setTotalPages] = useState<number>(0);

  // const fetchImageData = useCallback(async () => {
  //   if (!query) {
  //     setImages([]);
  //     setPage(1);
  //     setTotalPages(0);
  //     setStatus('idle');
  //     return;
  //   }

  //   setStatus('pending');
  //   setError(null);

  //   try {
  //     const data: UnsplashApiResponse = await fetchImages(
  //       query,
  //       page
  //     );

  //     if (data && data.results && data.results.length > 0) {
  //       if (page === 1) {
  //         setImages(data.results);
  //       } else {
  //         setImages((prevImages) => [
  //           ...prevImages,
  //           ...data.results,
  //         ]);
  //       }
  //       setTotalPages(data.total_pages);
  //       setStatus('resolved');
  //     } else {
  //       setImages([]);
  //       setTotalPages(0);
  //       setError('No images found for your query.');
  //       setStatus('resolved');
  //     }
  //   } catch (err: any) {
  //     console.error('Error retrieving images:', err);
  //     setError(
  //       'Failed to fetch images. Please try again later.'
  //     );
  //     setImages([]);
  //     setTotalPages(0);
  //     setStatus('rejected');
  //   }
  // }, [query, page]);

  // useEffect(() => {
  //   fetchImageData();
  // }, [fetchImageData]);

  const handleSearchSubmit = (newQuery: string) => {
    if (newQuery.trim() === '') {
      // toast.error('Please enter text to search for images.'); // Видалено використання toast
      return;
    }
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setError(null);
      setImages([]);
    }
  };

  // const handleLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // Функції openModal та closeModal видалено, оскільки модальне вікно тимчасово відключено
  // const openModal = (imageUrl: string) => {
  //   setModalImage(imageUrl);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalImage('');
  // };

  // const showLoadMoreButton =
  //   images.length > 0 &&
  //   page < totalPages &&
  //   status !== 'pending';

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      {/* Видалено використання Toaster */}

      {/* {status === 'pending' && <Loader />} */}
      {/* Видалено використання Loader */}

      {error && <ErrorMessage message={error} />}

      {/* {images.length > 0 && (
        <ImageGallery
          images={images}
          // onImageClick={openModal} // Видалено обробник кліку, оскільки модальне вікно тимчасово відключено
        />
      )} */}

      {/* {showLoadMoreButton && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )} */}

      {/* Модальне вікно тимчасово відключено */}
      {/* {showModal && (
        <ImageModal
          imageUrl={modalImage}
          onClose={closeModal}
        />
      )} */}
    </div>
  );
}

export default App;
