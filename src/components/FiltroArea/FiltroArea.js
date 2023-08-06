import { useState } from "react"
import { Label } from "./styled"

const allToppings = [
  { name: "Linguagens", checked: false },
  { name: "Matemática", checked: false },
  { name: "Ciências Humanas", checked: false },
  { name: "Ciências da Natureza", checked: false }
]

export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <Label htmlFor={`checkbox-${index}`}>{label}</Label>
    </div>
  )
}

function FiltroArea() {
  const [toppings, setToppings] = useState(allToppings)

  const updateCheckStatus = index => {
    setToppings(
      toppings.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )
  }

  return (
    <div className="App">
      {toppings.map((topping, index) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={topping.name}
        />
      ))}

    </div>
  )
}

export default FiltroArea