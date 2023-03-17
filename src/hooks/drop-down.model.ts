import { DropDownProps } from "../components/DropDown.model"

export declare interface UseInputProps extends DropDownProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}