import React, { useState } from "react"
import { startingList } from "./parameters"
import { DropDown } from "./components/DropDown"
import { ListItem } from "./components/DropDown.model"
import { useAppClasses } from "./App.style"

export const App = () => {
  const [items, setItems] = useState(startingList)
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null)

  const appClass = useAppClasses()
  return (
    <DropDown
      items={items}
      setItems={setItems}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      className={appClass.dropDownClass}
    ></DropDown>
  )
}
