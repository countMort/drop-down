import React, { useState } from "react"
import { startingList } from "./parameters"
import { DropDown } from "./components/DropDown"
import { ListItem } from "./components/DropDown.model"

export const App = () => {
  const [items, setItems] = useState(startingList)
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null)

  return (
    <DropDown
      items={items}
      setItems={setItems}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    ></DropDown>
  )
}
