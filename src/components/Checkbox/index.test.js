import { render, fireEvent, screen } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox component", () => {
  test("renders checkbox with default props", () => {
    render(<Checkbox data-testid="test-checkbox" />);
    const checkboxElement = screen.getByTestId("test-checkbox");

    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
  });

  test("renders checkbox as checked when checked prop is true", () => {
    render(<Checkbox checked={true} data-testid="test-checkbox" />);
    const checkboxElement = screen.getByTestId("test-checkbox");

    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).toBeChecked();
  });

  test("calls onChange when checkbox is clicked", () => {
    const onChangeMock = jest.fn();
    render(<Checkbox onChange={onChangeMock} data-testid="test-checkbox" />);
    const checkboxElement = screen.getByTestId("test-checkbox");
    fireEvent.click(checkboxElement);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
