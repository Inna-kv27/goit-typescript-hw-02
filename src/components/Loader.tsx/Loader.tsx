import { CircleLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircleLoader
        color="#3f51b5"
        size={80}
        aria-label="loading"
      />
    </div>
  );
};

export default Loader;
