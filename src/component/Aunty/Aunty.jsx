import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousine>Shinjon</Cousine>
                <Cousine hisFriend={true} ring={ring}>Labib</Cousine>
            </section>
        </div>
    );
};

export default Aunty;