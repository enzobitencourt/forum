import { useState } from "react"
import { Label } from "./styled"

const allToppings = [
  { name: "Políticas Públicas", checked: false },
  { name: "História", checked: false },
  { name: "Urbanização", checked: false },
  { name: "Revolução Industrial", checked: false }
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

function Filtro() {
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

export default Filtro