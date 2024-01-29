import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Input from ".";

describe("Input component", () => {
  test("renders input with placeholder and magnifying glass icon", () => {
    const placeholder = "Search";
    const name = "searchInput";

    render(<Input placeholder={placeholder} name={name} />);

    const inputElement = screen.getByPlaceholderText(placeholder);
    const magnifyingGlassIcon = screen.getByTestId("magnifying-glass-icon");

    expect(inputElement).toBeInTheDocument();
    expect(magnifyingGlassIcon).toBeInTheDocument();
  });

  // test("calls onChange when input value changes", () => {
  //   const placeholder = "Search";
  //   const name = "searchInput";
  //   const onChangeMock = jest.fn();

  //   render(
  //     <Input placeholder={placeholder} name={name} onChange={onChangeMock} />,
  //   );
  //   const inputElement = screen.getByPlaceholderText(placeholder);

  //   userEvent.type(inputElement, "hello");

  //   // expect(inputElement).toBeInTheDocument();

  //   expect(onChangeMock).toHaveBeenCalledWith(
  //     expect.objectContaining({ target: { value: "hello" } }),
  //   );
  // });
});
