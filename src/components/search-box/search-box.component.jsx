import './search-box.styles.css';

const SearchBox = ({placeholder, setSearch}) => {
  return (
    <input 
      className='search-box'
      type='search'
      placeholder={placeholder}
      onChange={(event) => setSearch(event.target.value)}
    />
  )
}

export default SearchBox;