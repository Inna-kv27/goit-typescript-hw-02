import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.loadMoreContainer}>
      <button
        type="button"
        className={styles.loadMoreButton}
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
