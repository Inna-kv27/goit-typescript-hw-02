import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CircleLoader } from 'react-spinners';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import { fetchImages } from './services/api';
import styles from './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      setImages([]);
      setPage(1);
      setTotalPages(0);
      return;
    }

    const fetchImageData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        if (
          data &&
          data.results &&
          data.results.length > 0
        ) {
          if (page === 1) {
            setImages(data.results);
          } else {
            setImages((prevImages) => [
              ...prevImages,
              ...data.results,
            ]);
          }
          setTotalPages(data.total_pages);
        } else {
          setImages([]);
          setTotalPages(0);
          setError('No images found for your query.');
        }
      } catch (error) {
        console.error('Error retrieving images:', error);
        setError(
          'Failed to fetch images. Please try again later.'
        );
        setImages([]);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageData();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setError(null);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" reverseOrder={false} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onImageClick={openModal}
        />
      )}
      {isLoading && (
        <div className={styles.loader}>
          <CircleLoader
            color="#3f51b5"
            size={80}
            ariaLabel="loading"
          />
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 &&
        page < totalPage &&
        !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      {showModal && (
        <ImageModal
          imageUrl={modalImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
