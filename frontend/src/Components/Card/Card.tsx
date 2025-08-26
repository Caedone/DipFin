import React, { type JSX , type SyntheticEvent} from 'react';
import "./Card.css"
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

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
         <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult.symbol}`} className="font-bold text-center text-black md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-black">{searchResult.currency}</p>
      <p className="font-bold text-black">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
    );
};

export default Card;