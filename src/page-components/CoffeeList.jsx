import React from 'react';
import { useCoffeeeData } from '../Context/CoffeeContext';

function CoffeeList() {
    const coffeeData = useCoffeeeData();

  return (
    <div>
      <h2>Los mejores Brunchs de Valencia:</h2>
      {data.map((brunch, i) => (
        <div key={i}>
          <h3>{brunch.titulo}</h3>
          <img src={brunch.imagen} alt={brunch.titulo} />
          <p>Precio del Brunch: {brunch.precio_brunch}</p>
          <p>Rating: {brunch.rating}</p>
          <p>{brunch.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default CoffeeList;
