// src/App.tsx
import { useState, useEffect, useCallback } from 'react';

import SearchBar from './components/SearchBar/SearchBar.tsx';
import ImageGallery from './components/ImageGallery/ImageGallery.tsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.tsx';
import Button from './components/Button/Button.tsx';
// Ці імпорти залишаються закоментованими, якщо ви не додаєте функціонал модалки/лоадера
// import ImageModal from './components/Modal/Modal.tsx';
// import Loader from './components/Loader/Loader.tsx';

import { fetchImages } from './services/api.ts';
import {
  UnsplashImage,
  UnsplashApiResponse,
} from './types/image.ts';
import styles from './App.module.css'; // Переконайтеся, що у вас є цей файл CSS

type Status = 'idle' | 'pending' | 'resolved' | 'rejected';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // Стейт для модального вікна, поки закоментовано
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [modalImage, setModalImage] = useState<string>('');

  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchImageData = useCallback(async () => {
    if (!query) {
      setImages([]);
      setPage(1);
      setTotalPages(0);
      setStatus('idle');
      return;
    }

    setStatus('pending');
    setError(null);

    try {
      const data: UnsplashApiResponse = await fetchImages(
        query,
        page
      );

      if (data && data.results && data.results.length > 0) {
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [
            ...prevImages,
            ...data.results,
          ]);
        }
        setTotalPages(data.total_pages);
        setStatus('resolved');
      } else {
        setImages([]);
        setTotalPages(0);
        setError('No images found for your query.');
        setStatus('resolved');
      }
    } catch (err) {
      // Виправлений блок catch з перевіркою типу
      if (err instanceof Error) {
        console.error(
          'Error retrieving images:',
          err.message
        );
        setError(
          `Failed to fetch images: ${err.message}. Please try again later.`
        );
      } else {
        console.error('An unknown error occurred:', err);
        setError(
          'Failed to fetch images. An unknown error occurred. Please try again later.'
        );
      }
      setImages([]);
      setTotalPages(0);
      setStatus('rejected');
    }
  }, [query, page]);

  useEffect(() => {
    fetchImageData();
  }, [fetchImageData]);

  const handleSearchSubmit = (newQuery: string) => {
    if (newQuery.trim() === '') {
      // Якщо рядок запиту порожній, не виконуємо пошук
      return;
    }
    // Перевіряємо, чи змінився запит, щоб скинути пагінацію та зображення
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1); // Скидаємо сторінку на 1 при новому пошуку
      setError(null); // Скидаємо помилку
      setImages([]); // Очищаємо зображення
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Функції для модального вікна, поки закоментовані
  // const openModal = (imageUrl: string) => {
  //   setModalImage(imageUrl);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalImage('');
  // };

  const showLoadMoreButton =
    images.length > 0 &&
    page < totalPages &&
    status !== 'pending'; // Показуємо кнопку, якщо є зображення, не остання сторінка і не йде завантаження

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />

      {/* Loader поки що закоментований */}
      {/* {status === 'pending' && <Loader />} */}

      {error && <ErrorMessage message={error} />}

      {images.length > 0 && (
        <ImageGallery
          images={images}
          // Пропс onImageClick закоментовано, оскільки ImageGallery тепер не вимагає його обов'язково
          // і модальне вікно не активне
          // onImageClick={openModal}
        />
      )}

      {showLoadMoreButton && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}

      {/* Модальне вікно поки що закоментоване */}
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
