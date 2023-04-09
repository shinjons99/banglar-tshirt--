import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const newRing = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>{newRing}</small></p>
        </div>
    );
};

export default Special;