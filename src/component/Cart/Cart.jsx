import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0){
        message= <p>Please add some Products</p>
    }
    else{
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>

        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1? 'blue': 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'black'}`}>something</p>
            {cart.length>2? <span className='orange'>Buy More</span> : <span>Poor</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonus !!!</p>
            }
            {
                cart.length !== 3 ||<h3>Three is not complete</h3>
            }
        </div>
    );
};

export default Cart;


/**
 *  Conditional Rendering
 * 1.use if or if else to set a variable that will contain an element, component
 * 2. ternary: condition ? 'for true':'false'
 * 3. Logical &&:(if the condition is true then the next thing is display)
 * 4. Logical ||:(if the condition is false then the next thing will be displays )
 */


/**
 * CONDITIONAL CSS
 * 1. use ternary
 * 2. ternary inside template string
 */