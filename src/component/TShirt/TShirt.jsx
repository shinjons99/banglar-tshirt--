import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt}) => {
    const {picture, name, id}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShirt;