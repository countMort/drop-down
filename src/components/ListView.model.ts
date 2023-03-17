import { DropDownProps } from "./DropDown.model"

export declare interface ListViewProps {
  selectedItem: DropDownProps['selectedItem']
  setSelectedItem: DropDownProps['setSelectedItem']
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isOpen: boolean
  items: DropDownProps['items']
}
