import { createUseStyles } from "react-jss"
import {
  transitionDelay,
  transitionDuration,
  primary,
  alphaPrimary,
  fontSize,
  inputHeight,
} from "../parameters"

export const useListViewClasses = createUseStyles({
  listViewClass: {
    fontSize,
    maxHeight: 0,
    overflow: "auto",
    transitionDuration,
    transitionDelay,
    transitionProperty: "max-height , border, box-shadow",
    border: "1px solid transparent",
    borderRadius: "1rem",
    marginTop: "1rem",
    position: "absolute",
    top: inputHeight,
    width: "100%",
    zIndex: 10,
    "&.open": {
      maxHeight: "12rem",
      transitionDelay: 0,
      border: "1px solid rgb(235, 235, 235)",
      boxShadow: "0px 2px 6px 0px rgba(220,220,220, 1)",
      WebkitBoxShadow: "0px 2px 6px 0px rgba(220,220,220, 1)",
    },
    "& ul": {
      padding: 0,
      margin: 0,
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
        width: "2rem;",
      },
    },
    "&::-webkit-scrollbar": {
      width: "0.2rem",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
})
