import React from 'react';
import Friend from '../Friend/Friend';

const Cousine = ({children, hisFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hisFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousine;