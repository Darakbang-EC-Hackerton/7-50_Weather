import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
// To-Do: onSearch를 props로 받아서 검색 기능을 만들어주세요! 
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
      setCity(''); 
    }
  };

  return (
// To-Do: 적절한 searchBar를 만들어보세요!
<div id='SearchBar' className={styles.searchBar}>
<input 
  type="text" 
  placeholder="찾고자 하는 도시 이름" 
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
<button onClick={handleSearch}>검색</button>
</div>
  );
}
