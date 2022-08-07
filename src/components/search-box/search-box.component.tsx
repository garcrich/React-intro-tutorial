import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  setSearch: (a: string) => void;
}

const SearchBox = ({placeholder, setSearch}: SearchBoxProps) => {
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