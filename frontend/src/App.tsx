import React from 'react';
import Card from './Components/Card/Card';
import './App.css'
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/search';

function App() {
  return (
    <div className="App">
        <Search />
        <CardList />
    </div>
  );
}

export default App
