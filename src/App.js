import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  const styleCountryContainer = {
    minHeight: '800px',
    width: '100%',
    background: 'LightGray',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridRowGap: '15px',
    gridColumnGap: '15px',
  }
  const handleAddCountry = (country) => {
   const newCart = [...cart, country];
   setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Countries Load: {countries.length}</h1>
      <h2>Country Add: {cart.length}</h2>
      <Cart cart = {cart}></Cart>
      <div style={styleCountryContainer}>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry = {handleAddCountry}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
