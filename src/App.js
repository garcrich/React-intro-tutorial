import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState([]);

  const setSearchString = (searchVal) => {
    setSearchField(searchVal.toLocaleLowerCase())
  }

  useEffect(() => {
    const getMonstersData = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      setMonsters(users);
    }

    getMonstersData();
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roladex</h1>
      <SearchBox 
        className='monsters-search-box'
        setSearch={setSearchString} 
        placeholder='serach monsters'
      />
      <CardList className="card-list" monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
