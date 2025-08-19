import React, { type ChangeEvent, type SyntheticEvent, useState } from 'react';
import Card from './Components/Card/Card';
import './App.css'
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/search';
import type { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const[search,setSearch] = useState<string>("");     // Creating a memory box called search that starts empty
  const[searchResults, setSearchResults] = useState<CompanySearch[]>([]); // Creating a memory box called searchResults that starts empty
  const[serverError, setServerError] = useState<string>(""); // Creating a memory box called serverError that starts empty

    // Listens for when someone types in our box
    // When they type, it updates the search box with what they typed
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);  // getting the value from the input field
        console.log(e);
    };
    const onPortfolioCreate = (e: SyntheticEvent) => {
      e.preventDefault(); // Prevents the default form submission behavior
      console.log();
    }

    // Listens for when someone clicks the search button
    // When they click, it logs the event to the console
    // This is where you would add functionality to perform a search
    const onSearchSubmit = async (e : SyntheticEvent) => {
      e.preventDefault(); 
        const result = await searchCompanies (search);
        if(typeof result === "string") {
          setServerError(result);
         } else if (Array.isArray(result)){
            setSearchResults(result)
         }
         console.log(searchResults);
      }
  return (
    <div className="App">
        <Search onSearchSubmit={onSearchSubmit} search={search}  handleSearchChange={handleSearchChange}/>
        <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate} />
        {serverError && <div>Unable to connect to API</div>}

    </div>
  );
}

export default App

