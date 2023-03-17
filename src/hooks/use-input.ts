import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react"
import { findItemInList } from "../utils"
import { UseInputProps } from "./use-input.model"

export const useInput = ({
  setItems,
  setSelectedItem,
  items,
  selectedItem,
  setIsOpen,
}: UseInputProps) => {
  const [inputValue, setInputValue] = useState("")

  /**
   * Given the value, checks if it exists between
   * the previous items or not.
   * If it did, selects the item in the list.
   * If not, creates and adds the item to the list and selects it and then
   * blurs the input to close it.
   */
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

  /**
   * Runs submitNewValue function with input value on pressing Enter.
   */
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
   * On input changes, updates its value and if the value
   * existed in the list, selects it.
   * I could've combined keyStrokeHandler with this function
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

  /**
   * On input blur, if no value had been selected,
   * clears the input to inform the user that no value is selected.
   * then closes the list.
   */
  const blurHandler: FocusEventHandler = useCallback(
    (event) => {
      const target = event.target as HTMLInputElement

      if (target.value && !selectedItem) {
        setInputValue(() => "")
      }

      setIsOpen(false)
    },
    [selectedItem]
  )

  /**
   * Opens the list on input focus.
   */
  const focusHandler: FocusEventHandler = useCallback((event) => {
    setIsOpen(true)
  }, [])

  /**
   * Didn't memoised the object because I'm using it's internals with
   * destruction pattern.
   * Memoising it can be a better practice for future use though.
   */
  return {
    inputValue,
    setInputValue,
    changeHandler,
    focusHandler,
    keyStrokeHandler,
    blurHandler,
  }
}
