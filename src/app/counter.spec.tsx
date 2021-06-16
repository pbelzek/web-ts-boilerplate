import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  test("Default value should be 0", () => {
    const view = render(<Counter />);
    const counterValueElement = view.getByTestId("counter-value");
    expect(counterValueElement).toHaveTextContent("0");
  });
  test('Clicking "Increment" button brings the counter up by 1', () => {
    const view = render(<Counter />);
    const counterValueElement = view.getByTestId("counter-value");
    const counterPrevValue = Number(counterValueElement.textContent);
    const incrementButton = view.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const counterNextValue = Number(counterValueElement.textContent);
    const difference = Number(counterNextValue) - Number(counterPrevValue);
    expect(difference).toBe(1);
  });
  test('Clicking "Decrement" button brings the counter down by 1', () => {
    const view = render(<Counter defaultValue={2} />);
    const counterValueElement = view.getByTestId("counter-value");
    const decrementButton = view.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    const counterNextValue = Number(counterValueElement.textContent);
    expect(counterNextValue).toBe(1);
  });
  test("Counter value shouldn't go below 0", () => {
    const view = render(<Counter />);
    const counterValueElement = view.getByTestId("counter-value");
    const decrementButton = view.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    const counterNextValue = Number(counterValueElement.textContent);
    expect(counterNextValue).toBe(0);
  });
  test("Clicking reset button resets the counter value to 0", () => {
    const view = render(<Counter defaultValue={5} />);
    const counterValueElement = view.getByTestId("counter-value");
    const decrementButton = view.getByRole("button", { name: "Reset" });
    fireEvent.click(decrementButton);
    const counterNextValue = Number(counterValueElement.textContent);
    expect(counterNextValue).toBe(0);
  });
});
