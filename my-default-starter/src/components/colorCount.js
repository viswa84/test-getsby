import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { INCREMENT_COUNT } from "../Reducers/cactiontypes"

const ColorCount = () => {
  const color = useSelector(store => store.color)
  const clr = color.heors.hero1.btn1.color

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: INCREMENT_COUNT })
  }

  return (
    <div>
      <button
        style={{ backgroundColor: clr, padding: "10px", "borderRadius":"10px",border:"none" }}
        onClick={handleClick}
      >
        Click me {color.heors.hero1.btn1.count}
      </button>
      <h3>{JSON.stringify(color)}</h3>
    </div>
  )
}

export default ColorCount
