import React, { type SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
portfolioValue: string; //string array
onPortfolioDelete: (e: SyntheticEvent) => void; // Function to handle portfolio deletion

}

export const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
    return( 
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link to={'/company/S{portfolioValue}'}className="pt-6 text-xl font-bold">{portfolioValue}</Link>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
    );
}; 