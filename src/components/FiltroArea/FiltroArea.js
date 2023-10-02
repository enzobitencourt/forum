import React, { useState } from "react";
import { Container } from "./styled"; // Remova a importação não utilizada de Label

const allToppings = [
  { name: "Linguagens", checked: false },
  { name: "Matemática", checked: false },
  { name: "Ciências Humanas", checked: false },
  { name: "Ciências Natureza", checked: false }
];

export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>
        <span>&nbsp;</span> 
        {label}
      </label>
    </div>
  );
}

function FiltroArea({ onCheckedToppingsChange }) {
  const [toppings, setToppings] = useState(allToppings);

  const updateCheckStatus = (index) => {
    const updatedToppings = toppings.map((topping, currentIndex) =>
      currentIndex === index
        ? { ...topping, checked: !topping.checked }
        : topping
    );
    setToppings(updatedToppings);

    const selectedNames = getCheckedToppings(updatedToppings);

    onCheckedToppingsChange(selectedNames);
  };

  function getCheckedToppings(toppings) {
    return toppings.filter((topping) => topping.checked).map((topping) => topping.name);
  }

  return (
    <Container>
      {toppings.map((topping, index) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={topping.name}
        />
      ))}
    </Container>
  );
}

export default FiltroArea;
