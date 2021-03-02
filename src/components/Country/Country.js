import React from 'react';

const Country = (props) => {
    const {flag, name, population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const styleEachCountry = {
    background: 'lightCyan',
    border: '1px solid red'
  }
    return (
        <div style={styleEachCountry}>
            <img src={flag} style={{width: '50%', height: '50%', margin: '0 auto', padding: '10px'}} alt=""/>
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;