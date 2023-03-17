import React, { useRef, useState } from "react"
import { DropDownProps, ListItem } from "./DropDown.model"
import { useDropDownClasses } from "./DropDown.style"
import drop_down_img from "../assets/drop-down-icon.svg"
import { useInput } from "../hooks"

export const DropDown = ({
  items,
  setItems,
  selectedItem,
  setSelectedItem,
}: DropDownProps) => {
  const classes = useDropDownClasses()

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
    </div>
  )
}
