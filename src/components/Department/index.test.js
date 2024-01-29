import { render, screen } from "@testing-library/react";

import Department from ".";

describe("Department component", () => {
  test("renders Sales department correctly", () => {
    const department = "sales";
    render(<Department department={department} />);

    const iconElement = screen.getByTestId("sales-icon");
    const textElement = screen.getByTestId("sales-text");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Sales");
  });

  test("renders Designs department correctly", () => {
    const department = "designs";
    render(<Department department={department} />);

    const iconElement = screen.getByTestId("designs-icon");
    const textElement = screen.getByTestId("designs-text");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Designs");
  });

  test("renders Support department correctly", () => {
    const department = "support";
    render(<Department department={department} />);

    const iconElement = screen.getByTestId("support-icon");
    const textElement = screen.getByTestId("support-text");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Support");
  });
});
