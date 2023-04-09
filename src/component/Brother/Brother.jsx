import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const AnotherRing = useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p><small>{AnotherRing}</small></p>
        </div>
    );
};

export default Brother;