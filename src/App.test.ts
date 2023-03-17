import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText(/drop-down icon image/i)).toBeInTheDocument();
  });

  it("should add value to list when enter is pressed", () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText(/text input/i);

    fireEvent.change(input, { target: { value: "apple" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(getByText(/apple/i)).toBeInTheDocument();
  });

  it("should select an item when clicked on", () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText(/text input/i);

    fireEvent.change(input, { target: { value: "apple" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    const listItem = getByText(/apple/i);
    fireEvent.click(listItem);

    expect(listItem).toHaveClass("selected");
  });

  it("should clear input value and selected item when input value does not match any items in the list", () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText(/text input/i);

    fireEvent.change(input, { target: { value: "orange" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    fireEvent.change(input, { target: { value: "pear" } });
    fireEvent.blur(input);

    expect(input).toHaveValue("");
    expect(getByText(/peach/i)).not.toHaveClass("selected");
  });
});