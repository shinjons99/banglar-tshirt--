import React from 'react';
import Cousine from '../Cousine/Cousine';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
            <Cousine>Sabila</Cousine>
            <Cousine>Nabila</Cousine>
            </section>
        </div>
    );
};

export default Uncle;