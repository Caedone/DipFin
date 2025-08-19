import React, { type JSX, type SyntheticEvent } from 'react';
import Card from "../Card/Card";
import {v4 as uuidv4} from 'uuid';
import type { CompanySearch } from '../../company';


interface Props {
    searchResults: CompanySearch[]; // Array of company search results
    onPortfolioCreate: (e:SyntheticEvent) => void; // Function to handle portfolio creation

}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }: Props): JSX.Element => {
    return <>
    {searchResults.length > 0 ? (
        searchResults.map((result) => {
            return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>;
        })

    ): (
        <h1> No Result </h1>
    )}</>;

};

export default CardList;