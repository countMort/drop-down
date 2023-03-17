import { ListItem } from "../components/DropDown.model"

export const findItemInList = (value: string, list: ListItem[]) => {
  const formattedValue = value.trim().toLocaleLowerCase()
  const foundItem = list.find(
    (item) => item.value.trim().toLocaleLowerCase() === formattedValue
  )
  return foundItem
}
