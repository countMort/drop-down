import { createUseStyles } from "react-jss"
import {
  transitionDelay,
  transitionDuration,
  primary,
  alphaPrimary,
  fontSize,
  inputHeight,
} from "../parameters"

export const useDropDownClasses = createUseStyles({
  dropDownClass: {
    position: "relative",
  },
  inputContainerClass: {
    display: "flex",
    transitionProperty: "box-shadow,border",
    transitionDelay,
    transitionDuration,
    border: `1px solid black`,
    borderRadius: "0.5rem",
    "&.open": {
      borderColor: primary,
      transitionDelay: 0,
      boxShadow: `0px 0px 1px 2px ${alphaPrimary(0.2)};`,
      WebkitBoxShadow: `0px 0px 1px 2px ${alphaPrimary(0.2)};`,
    },
    "& input": {
      padding: "0 0.5rem",
      fontSize,
      borderRadius: "inherit",
      width: "100%",
      height: inputHeight,
      border: "none",
      outline: "none",
    },
    "& img": {
      width: "1rem",
      margin: "auto 0.5rem",
      transitionProperty: "transform",
      transitionDelay: "inherit",
      transitionDuration: "inherit",
      maxHeight: inputHeight,
    },
    "& img.open": {
      transform: "rotate(180deg)",
    },
  },
})
