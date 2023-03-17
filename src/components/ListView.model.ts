import { DropDownProps, ListItem } from "./DropDown.model"

export declare interface ListViewProps {
  isOpen: boolean
  items: DropDownProps['items']
  selectedItem: DropDownProps['selectedItem']
  listItemClickHandler: (item: ListItem) => void
}
