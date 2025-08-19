import React, { type JSX , type SyntheticEvent} from 'react';
import "./Card.css"
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

// Creates an empty object for Props type 
// Interfaces "labels" our data structure
// This is useful for type checking and ensuring that the component receives the correct props
interface Props {
    id: string; // Unique identifier for the card
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void; // Function to handle portfolio creation
}

// PAssing Props to the Card component
// This allows the component to receive data from its parent component
const Card: React.FC<Props> = ({id,searchResult, onPortfolioCreate }: Props) : JSX.Element => {
    return (
        <div className="card">
            <img 
                alt="Company Logo" 
            />
            <div className="details">
            <h2> {searchResult.name} ({searchResult.symbol})</h2>
            <p>${searchResult.currency}</p>
            </div>
            <p className="info"> {searchResult.exchangeShortName} - {searchResult.stockExchange} </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
            
        </div>
    );
};

export default Card;