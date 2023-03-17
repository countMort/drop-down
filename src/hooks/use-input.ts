import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react"
import { findItemInList } from "../utils"
import { UseInputProps } from "./drop-down.model"

export const useInput = ({
  setItems,
  setSelectedItem,
  items,
  selectedItem,
  setIsOpen,
}: UseInputProps) => {
  const [inputValue, setInputValue] = useState("")

  const submitNewValue = useCallback(
    (value: string, target: HTMLInputElement) => {
      if (!value.trim()) return

      const foundItem = findItemInList(value, items)
      if (!foundItem) {
        const item = {
          text: value,
          value,
        }
        setItems([item, ...items])
        setSelectedItem(item)
      } else {
        setSelectedItem(foundItem)
        target.blur()
      }
    },
    [items]
  )

  const keyStrokeHandler: KeyboardEventHandler = useCallback(
    (event) => {
      const target = event.target as HTMLInputElement
      const value = target.value.trim()
      if (event.key === "Enter" && value) {
        submitNewValue(value, target)
      }
    },
    [submitNewValue]
  )

  /**
   * I could combine ketStrokeHandler with this function
   * but I tot they actiually have different purposes
   * and might be a bad idea regarding future developments.
   */
  const changeHandler: ChangeEventHandler = useCallback(
    (event) => {
      const target = event.target as HTMLInputElement
      const value = target.value
      setInputValue(() => value)
      const foundItem = findItemInList(value, items)
      if (foundItem) {
        setSelectedItem(foundItem)
      } else if (selectedItem) {
        setSelectedItem(null)
      }
    },
    [selectedItem]
  )

  const blurHandler: FocusEventHandler = useCallback(
    (event) => {
      const target = event.target as HTMLInputElement
      const clearInputCondition =
        target.value &&
        selectedItem?.value.trim().toLocaleLowerCase() !==
          target.value.trim().toLocaleLowerCase()

      if (clearInputCondition) {
        setInputValue(() => "")
        setSelectedItem(null)
      }

      setIsOpen(false)
    },
    [selectedItem]
  )

  const focusHandler: FocusEventHandler = useCallback((event) => {
    setIsOpen(true)
  }, [])

  return {
    inputValue,
    setInputValue,
    changeHandler,
    focusHandler,
    keyStrokeHandler,
    blurHandler,
  }
}
