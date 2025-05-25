import { useState, useEffect, useCallback } from 'react';

import SearchBar from './components/SearchBar/SearchBar.tsx';
import ImageGallery from './components/ImageGallery/ImageGallery.tsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.tsx';
import Button from './components/Button/Button.tsx';

import { fetchImages } from './services/api.ts';
import {
  UnsplashImage,
  UnsplashApiResponse,
} from './types/image.ts';
import styles from './App.module.css';

type Status = 'idle' | 'pending' | 'resolved' | 'rejected';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

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
      return;
    }
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setError(null);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const showLoadMoreButton =
    images.length > 0 &&
    page < totalPages &&
    status !== 'pending';

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />

      {error && <ErrorMessage message={error} />}

      {images.length > 0 && (
        <ImageGallery images={images} />
      )}

      {showLoadMoreButton && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </div>
  );
}

export default App;
