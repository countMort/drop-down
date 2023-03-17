import React, { useRef, useState } from "react"
import { DropDownProps, ListItem } from "./DropDown.model"
import { useDropDownClasses } from "./DropDown.style"
import drop_down_img from "../assets/drop-down-icon.svg"
import { useInput } from "../hooks"
import { ListView } from "./ListView"

const DropDownFunction = ({
  items,
  setItems,
  selectedItem,
  setSelectedItem,
  className,
}: DropDownProps) => {
  const { dropDownClass, inputContainerClass } = useDropDownClasses()

  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    inputValue,
    setInputValue,
    changeHandler,
    focusHandler,
    keyStrokeHandler,
    blurHandler,
  } = useInput({
    setItems,
    setSelectedItem,
    items,
    selectedItem,
    setIsOpen,
  })

  /**
   * On clicking on a list item,
   * selects it's coresponding item
   * and changes the input value to it.
   * @param item 
   */
  const listItemClickHandler = (item: ListItem) => {
    setSelectedItem(item)
    setInputValue(() => item.value)
  }

  return (
    <div className={`${dropDownClass} ${className}`}>
      <div className={`${inputContainerClass} ${isOpen ? "open" : ""}`}>
        {/* Probaply can unify open class on the above div and lower one for list, should check that later */}
        <input
          ref={inputRef}
          type="text"
          onKeyDown={keyStrokeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={changeHandler}
          value={inputValue}
        />
        <img
          className={isOpen ? "open" : ""}
          src={drop_down_img}
          alt="drop-down icon image"
          onClick={() => inputRef.current?.focus()}
        />
      </div>
      <ListView
        isOpen={isOpen}
        items={items}
        selectedItem={selectedItem}
        listItemClickHandler={listItemClickHandler}
      ></ListView>
    </div>
  )
}

/**
 * Not neccesary for this project though because all of the projects
 * states are related to this component
 */
export const DropDown = React.memo(DropDownFunction)
