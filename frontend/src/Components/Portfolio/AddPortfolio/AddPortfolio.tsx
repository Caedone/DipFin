import React, { type SyntheticEvent } from 'react';
interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void; // Function to handle portfolio creation
    symbol: string; 
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return <form onSubmit ={onPortfolioCreate}>   
    <input readOnly={true} hidden={true} value={symbol} />
    <button type="submit">Add</button>

    </form>
};

export default AddPortfolio;
