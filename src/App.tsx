// src/App.tsx
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import styles from './App.module.css';

function App() {
  const [query, setQuery] = useState<string>('');

  const handleSearchSubmit = (newQuery: string) => {
    setQuery(newQuery);
    console.log('Search query:', newQuery); // Для перевірки роботи
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* Тут поки що нічого більше немає, щоб мінімізувати потенційні проблеми */}
      <h1>Hello from App!</h1>{' '}
      {/* Додамо текст, щоб щось бачити */}
    </div>
  );
}

export default App;
