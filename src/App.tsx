import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react"
import { ListItem } from "./App.model"
import { startingList } from "./parameters"

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [list, setList] = useState(startingList)
  const [selectedItem, setSelectedItem] = useState<ListItem>(null)

  const keyStrokeHandler: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement
      handleValueSubmition(target.value)
    }
  }

  const handleValueSubmition = (value: string) => {
    const foundItem = list.find((listItem) => listItem.value === value)
    if (!foundItem) {
      const item = {
        text: value,
        value,
      }
      setList([...list, item])
      setSelectedItem(item)
    } else {
      setSelectedItem(foundItem)
    }
  }

  const blurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement
    const clearInputCondition =
      target.value && selectedItem.value !== inputRef.current.value
    if (clearInputCondition) {
      // Used inputRef.current.value instead of target.value because it's
      // better not to manipulate the the dom directly.
      inputRef.current.value = ""
      setSelectedItem(null)
    }
  }

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={keyStrokeHandler}
        onBlur={blurHandler}
        style={{ width: "100%", height: "2rem", fontSize: "1.5rem" }}
      />
      <div>
        <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
          {list.map((item) => (
            <li key={item.value}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
