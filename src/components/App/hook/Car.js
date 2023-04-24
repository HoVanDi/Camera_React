import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

function Car () {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: 'Black',
        year: 1964
    })

    const changeColor = () => {
        setCar(previousState => {
            return{...previousState,color:'blue'}
        });
        // cách khác
        // setCar({...car,color: 'Blue' });
    }

    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Car;
