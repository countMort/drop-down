import React, { KeyboardEvent, useEffect, useState } from "react"
import { startingList } from "./parameters"

export const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [filteredList, setFilteredList] = useState([])

  const keyStrokeHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setInputValue(target.value)
  }

  useEffect(() => {
    const lowerCasedInputValue = inputValue.toLocaleLowerCase()
    const newFilteredList = startingList.filter((item) => {
      const lowerCasedText = item.text.toLocaleLowerCase()
      const lowerCasedValue = item.value.toLocaleLowerCase()
      return lowerCasedText.includes(lowerCasedInputValue) ||
        lowerCasedValue.includes(lowerCasedInputValue)
    })
    setFilteredList(newFilteredList)
  }, [inputValue])

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <input
        type="text"
        onKeyUp={keyStrokeHandler}
        style={{ width: "100%", height: "2rem", fontSize: "1.5rem" }}
      />
      <div>
        <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
          {filteredList.map((item) => (
            <li key={item.value}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
