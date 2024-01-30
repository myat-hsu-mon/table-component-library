import { render, screen } from "@testing-library/react";

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
});
