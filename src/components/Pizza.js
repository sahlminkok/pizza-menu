import React from "react";
import pizzaData from "../data";

const Pizza = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <li
                className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
                key={pizza.id}
              >
                <img src={pizza.photoName} alt={pizza.name} />
                <div>
                  <h3>{pizza.name}</h3>
                  <p>{pizza.ingredients}</p>
                  <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </>
  );
};

export default Pizza;
