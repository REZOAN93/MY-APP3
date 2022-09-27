import React from 'react';

const Country = (props) => {
    const {name,flags,capital,continents}=props.countries
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <h6>{capital}</h6>
            <img src={flags.png} alt="" />
            <p><small>{continents}</small></p>

        </div>
    );
};

export default Country;