import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react"
import { ListItem } from "./App.model"
import { startingList } from "./parameters"
import { useAppClasses } from "./App.style"
import drop_down_img from "./assets/drop-down-icon.svg"
import check_img from "./assets/check-icon.svg"

export const App = () => {
  const classes = useAppClasses()

  const inputRef = useRef<HTMLInputElement>(null)
  const [list, setList] = useState(startingList)
  const [isOpen, setIsOpen] = useState(false)
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
      setList([item, ...list])
      setSelectedItem(item)
    } else {
      setSelectedItem(foundItem)
    }
  }

  const blurHandler: FocusEventHandler = (event) => {
    const target = event.target as HTMLInputElement
    const clearInputCondition =
      target.value && selectedItem?.value.trim() !== target.value.trim()

    if (clearInputCondition) {
      inputRef.current.value = ""
      setSelectedItem(null)
    }

    setIsOpen(false)
  }

  const focusHandler: FocusEventHandler = (event) => {
    setIsOpen(true)
  }

  const listItemClickHandler = (item: ListItem) => {
    setSelectedItem(item)
    inputRef.current.value = item.value
    setIsOpen(false)
  }

  // const toggleDropDown = (forcedValue?: boolean) => {
  //   if (forcedValue !== undefined) {
  //     setIsOpen(forcedValue)
  //   } else {
  //     setIsOpen((value) => !value)
  //   }
  // }

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <div className={`${classes.inputContainer} ${isOpen ? "open" : ""}`}>
        {/* Probaply can unify open class on the above div and lower one for list, should check that later */}
        <input
          ref={inputRef}
          type="text"
          onKeyDown={keyStrokeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        <img className={isOpen ? "open" : ""} src={drop_down_img} />
      </div>
      <div className={`${classes.listContainer} ${isOpen ? "open" : ""}`}>
        <ul>
          {list.map((item) => (
            <li
              onClick={() => listItemClickHandler(item)}
              key={item.value}
              className={selectedItem === item ? 'selected' : ''}
            >
              {item.text}
              {selectedItem === item && <img src={check_img}></img>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
