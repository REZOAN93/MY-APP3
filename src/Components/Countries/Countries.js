import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const[countries, setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setCountries(json))
    },[])

    return (
        <div>
            <h2>Country List:{countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(cd=><Country countries={cd}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;