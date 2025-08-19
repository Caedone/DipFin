import React, { useState, type ChangeEvent, type JSX , type SyntheticEvent} from 'react';

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;   // Function to handle click events
    search: string | undefined; // Search input value, can be a string or undefined
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void; // Function to handle input changes
};

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => { // Creating a search box component 
    
    return (
        <>
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange} />
            </form>
        </>
    
    );
};

export default Search;