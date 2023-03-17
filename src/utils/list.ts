import { ListItem } from "../components/DropDown.model"

/**
 * @param value - 'value' property of the searching list-item obj
 */
export const findItemInList = (value: string, list: ListItem[]) => {
  const formattedValue = value.trim().toLocaleLowerCase()
  const foundItem = list.find(
    (item) => item.value.trim().toLocaleLowerCase() === formattedValue
  )
  return foundItem
}
