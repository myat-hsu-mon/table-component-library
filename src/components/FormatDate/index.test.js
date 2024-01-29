import { render, screen } from "@testing-library/react";

import FormatDate from ".";
import { classNames } from "../../utils";

describe("FormatDate component", () => {
  test('renders "Yesterday" with red background', () => {
    const formattedDate = "Yesterday";
    render(<FormatDate formattedDate={formattedDate} />);

    const statusColorElement = screen.getByTestId("status-color");
    const textElement = screen.getByTestId("formatted-date");

    expect(statusColorElement).toHaveClass(
      classNames("h-2", "w-2", "rounded-full", "bg-red"),
    );
    expect(textElement).toHaveTextContent("Yesterday");
  });

  test('renders "In 2 days" with yellow background', () => {
    const formattedDate = "In 2 days";

    render(<FormatDate formattedDate={formattedDate} />);

    const statusColorElement = screen.getByTestId("status-color");
    const textElement = screen.getByTestId("formatted-date");

    expect(statusColorElement).toHaveClass(
      classNames("h-2", "w-2", "rounded-full", "bg-yellow"),
    );
    expect(textElement).toHaveTextContent("In 2 days");
  });

  test("renders default case with green background", () => {
    const formattedDate = "01-01-2020";
    render(<FormatDate formattedDate={formattedDate} />);

    const statusColorElement = screen.getByTestId("status-color");
    const textElement = screen.getByTestId("formatted-date");

    expect(statusColorElement).toHaveClass(
      classNames("h-2", "w-2", "rounded-full", "bg-green"),
    );
    expect(textElement).toHaveTextContent("01-01-2020");
  });
});
