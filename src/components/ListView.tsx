import React, { useCallback, useEffect, useRef } from "react"
import { scrollToElement } from "../utils"
import check_img from "../assets/check-icon.svg"
import { ListViewProps } from "./ListView.model"
import { useListViewClasses } from "./ListView.style"

export const ListView = ({
  isOpen,
  items,
  selectedItem,
  listItemClickHandler,
}: ListViewProps) => {
  const { listViewClass } = useListViewClasses()
  const dropDownRef = useRef<HTMLDivElement>(null)

  const scrollToSelected = useCallback(() => {
    if (!selectedItem || !dropDownRef.current) return

    const selectedLi: HTMLDivElement | null =
      dropDownRef.current.querySelector("li.selected")
    if (!selectedLi) return

    scrollToElement(dropDownRef.current, selectedLi)
  }, [selectedItem, dropDownRef])

  useEffect(() => {
    scrollToSelected()
  }, [scrollToSelected])

  return (
    <div
      ref={dropDownRef}
      className={`${listViewClass} ${isOpen ? "open" : ""}`}
    >
      <ul>
        {items.map((item) => (
          <li
            onClick={() => listItemClickHandler(item)}
            key={item.value}
            className={selectedItem === item ? "selected" : ""}
          >
            {item.text}
            {selectedItem === item && <img src={check_img}></img>}
          </li>
        ))}
      </ul>
    </div>
  )
}
