import { render, fireEvent, screen } from "@testing-library/react";

import Button from ".";
import { FilterIcon as TestIcon } from "../../assets/index";

describe("Button component", () => {
//   test("renders button with icon and text", () => {
//     const onClickMock = jest.fn();
//     const buttonText = "Click me";

//     render(
//       <Button
//         onClick={onClickMock}
//         icon={TestIcon}
//         text={buttonText}
//         data-testid="test-button"
//       />,
//     );

//     const buttonElement = screen.getByTestId("test-button");
//     // eslint-disable-next-line testing-library/no-node-access
//     const iconElement = buttonElement.querySelector(".h-5");
//     const textElement = screen.getByText(buttonText);

//     expect(buttonElement).toBeInTheDocument();
//     expect(iconElement).toBeInTheDocument();
//     expect(textElement).toBeInTheDocument();
//   });

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
