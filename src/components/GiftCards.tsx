import React from 'react';

const GiftCards:React.FC = () => {
    return (
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center mt-5">
            <div className="card bg-dark text-white width">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_AGC.jpg" className="card-img" alt="Photo"/>
            </div>
            <div className="card bg-dark text-white width">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_BGC.jpg" className="card-img" alt="Photo"/>
            </div>
        </div>
    );
};

export default GiftCards;