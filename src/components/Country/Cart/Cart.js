import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //  let totalPopulation = 0;
    //     for(let i=0; i<cart.length; i++){
    //         const eachCountry = cart[i];
    //         totalPopulation = totalPopulation + eachCountry.population;
    //     }
    const totalPopulation = cart.reduce((total, eachCountry) => total + eachCountry.population, 0);
    return (
        <div>
           <h2>This is cart: {cart.length}</h2>
           <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;