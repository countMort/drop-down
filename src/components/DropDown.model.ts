import { startingList } from "../parameters"

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export declare type ListItem = ArrayElement<typeof startingList>

export declare interface DropDownProps {
  items: ListItem[]
  setItems: React.Dispatch<React.SetStateAction<DropDownProps["items"]>>
  selectedItem: ListItem | null
  setSelectedItem: React.Dispatch<
    React.SetStateAction<React.SetStateAction<DropDownProps["selectedItem"]>>
  >
}
