import React, { type JSX } from 'react';
import "./Card.css"

// Creates an empty object for Props type 
// Interfaces "labels" our data structure
// This is useful for type checking and ensuring that the component receives the correct props
interface Props {
    companyName?: string;       // Only passs string values
    ticker?: string;        // Only passs string values
    price?: number;     // Only passs numb values
}

// PAssing Props to the Card component
// This allows the component to receive data from its parent component
const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
    return (
        <div className="card">
            <img 
                src="https://images.pexels.com/photos/32486152/pexels-photo-32486152.jpeg" 
                alt="Placeholder" 
            />
            <div className="details">
            <h2> {companyName} ({ticker})</h2>
            <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error corporis, consectetur assumenda vero dolore at minus nemo officiis nulla fugit dolor architecto mollitia porro inventore. Accusantium odit porro expedita!</p>
        </div>
    );
};

export default Card;