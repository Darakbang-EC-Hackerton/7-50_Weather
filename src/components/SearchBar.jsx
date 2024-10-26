import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
// To-Do: onSearch를 props로 받아서 검색 기능을 만들어주세요! 
  const [city, setCity] = useState('');

  const handleSearch = () => {

  };

  return (
// To-Do: 적절한 searchBar를 만들어보세요!
    <div className={styles.searchBar}>

    </div>
  );
}
