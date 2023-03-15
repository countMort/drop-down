import { createUseStyles } from "react-jss"
import {
  transitionDelay,
  transitionDuration,
  primary,
  alphaPrimary,
  fontSize,
} from "./parameters"

export const useAppClasses = createUseStyles({
  listContainer: {
    fontSize,
    maxHeight: 0,
    overflow: "auto",
    transition: `max-height ${transitionDuration} ${transitionDelay}`,
    zIndex: 2,
    position: "relative",
    "&.open": {
      maxHeight: "12rem",
      transitionDelay: 0,
    },
    "& ul": {
      padding: 0
    },
    "& li": {
      display: "flex",
      alignItems: "center",
      height: "2rem",
      boxSizing: "content-box",
      listStyle: "none",
      padding: "0.4rem 1rem",
      borderRadius: "0.3rem",
      justifyContent: "space-between",
      "&:hover,&.selected": {
        cursor: "pointer",
        background: alphaPrimary(0.05),
        color: primary,
      },
      "& img": {
        width: '2rem;'
      }
    },
    "&::-webkit-scrollbar": {
      width: "0.2rem",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
    // color: "green",
    // margin: {
    //   // jss-expand gives more readable syntax
    //   top: 5, // jss-default-unit makes this 5px
    //   right: 0,
    //   bottom: 0,
    //   left: "1rem",
    // },
    // "& span": {
    //   // jss-nested applies this to a child span
    //   fontWeight: "bold", // jss-camel-case turns this into 'font-weight'
    // },
  },
  inputContainer: {
    display: "flex",
    transitionProperty: "box-shadow,border",
    transitionDelay,
    transitionDuration,
    border: `1px solid black`,
    borderRadius: "0.5rem",
    padding: "0 0.5rem",
    "&.open": {
      borderColor: primary,
      transitionDelay: 0,
      boxShadow: `0px 0px 1px 2px ${alphaPrimary(0.2)};`,
      WebkitBoxShadow: `0px 0px 1px 2px ${alphaPrimary(0.2)};`,
      // outline: `2px solid ${alphaPrimary(0.2)}`
    },
    "& input": {
      fontSize,
      borderRadius: "inherit",
      width: "100%",
      height: "2rem",
      border: "none",
      outline: "none",
    },
    "& img": {
      width: "1rem",
      margin: {
        left: "0.5rem",
        top: "auto",
        bottom: "auto",
      },
      transitionProperty: "transform",
      transitionDelay: "inherit",
      transitionDuration: "inherit",
    },
    "& img.open": {
      transform: "rotate(180deg)",
    },
  },
  //   myLabel: {
  //     fontStyle: "italic",
  //   },
})
