import { createUseStyles } from "react-jss"

const transitionDelay = "0.2s"

export const useAppClasses = createUseStyles({
  listContainer: {
    maxHeight: 0,
    overflow: "hidden",
    transition: `max-height 0.3s ${transitionDelay}`,
    zIndex: 2,
    position: "relative",
    "&.open": {
      maxHeight: "8rem",
      overflow: "auto",
    },
    "& li": {
      listStyle: "none",
      padding: "none",
      textAlign: "center",
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
    "& input": { width: "100%", height: "2rem", fontSize: "1.5rem" },
    "& img": {
      height: "0.5rem",
      margin: {
        left: "0.5rem",
        top: "auto",
        bottom: "auto",
      },
      transition: `transform 0.2s ${transitionDelay}`,
    },
    "& img.open": {
      transform: "rotate(180deg)",
    },
  },
  //   myLabel: {
  //     fontStyle: "italic",
  //   },
})
