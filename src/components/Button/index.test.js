import { render, fireEvent, screen } from "@testing-library/react";

import Button from ".";
import { FilterIcon as TestIcon } from "../../assets/index";

describe("Button component", () => {
  test("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    render(
      <Button
        onClick={onClickMock}
        icon={TestIcon}
        data-testid="test-button"
      />,
    );

    const buttonElement = screen.getByTestId("test-button");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
