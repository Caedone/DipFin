import React from 'react';
import "./Card.css"

type Props ={};

const Card = (props: Props) => {
    return (
        <div className="card">
            <img 
                src="https://images.pexels.com/photos/32486152/pexels-photo-32486152.jpeg" 
                alt="Placeholder" 
            />
            <div className="details">
            <h2> AAPL</h2>
            <p>$110</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error corporis, consectetur assumenda vero dolore at minus nemo officiis nulla fugit dolor architecto mollitia porro inventore. Accusantium odit porro expedita!</p>
        </div>
    );
};

export default Card;