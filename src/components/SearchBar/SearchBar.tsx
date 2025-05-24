import React, {
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
}) => {
  const [searchQuery, setSearchQuery] =
    useState<string>('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error(
        'Please enter text to search for images.'
      );
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
