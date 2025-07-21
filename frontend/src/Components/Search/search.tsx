import React, { useState, type ChangeEvent, type JSX , type SyntheticEvent} from 'react';

type Props = {};

const Search: React.FC<{}> = (props: Props): JSX.Element => { // Creating a search box component 
    const[search,setSearch] = useState<string>("");     // Creating a memory box called search that starts empty

    // Listens for when someone types in our box
    // When they type, it updates the search box with what they typed
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);  // getting the value from the input field
        console.log(e);
    };

    // Listens for when someone clicks the search button
    // When they click, it logs the event to the console
    // This is where you would add functionality to perform a search
    const onClick = (e: SyntheticEvent) => {
        console.log(e);

    }
    return (

    <div>
        <input
            value={search} 
            onChange={(e) => handleChange(e)}
        />
        <button onClick={(e)=> onClick(e)}>Search</button>
    </div>
    
)}

export default Search;