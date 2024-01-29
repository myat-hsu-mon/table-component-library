import { render, screen } from "@testing-library/react";

import Status from "./";

describe("Status Component", () => {
  test('renders with the correct styles for "pending"', () => {
    render(<Status status="pending" />);

    const statusElement = screen.getByText("PENDING");
    expect(statusElement).toHaveClass(
      "inline-block",
      "px-3",
      "py-1",
      "text-xs",
      "font-semibold",
      "text-yellow-dark",
      "bg-yellow-light",
      "rounded-full"
    );
  });

  test('renders with the correct styles for "failed"', () => {
    render(<Status status="failed" />);

    const statusElement = screen.getByText("FAILED");
    expect(statusElement).toHaveClass(
      "inline-block",
      "px-3",
      "py-1",
      "text-xs",
      "font-semibold",
      "text-red-dark",
      "bg-red-light",
      "rounded-full"
    );
  });

  test('renders with the correct styles for "done"', () => {
    render(<Status status="done" />);

    const statusElement = screen.getByText("DONE");
    expect(statusElement).toHaveClass(
      "inline-block",
      "px-3",
      "py-1",
      "text-xs",
      "font-semibold",
      "text-green-dark",
      "bg-green-light",
      "rounded-full"
    );
  });

  test("renders with default styles for nonexistent status", () => {
    render(<Status status="nonexistent" />);

    const statusElement = screen.getByText("NONEXISTENT");
    expect(statusElement).toHaveClass(
      "inline-block",
      "px-3",
      "py-1",
      "text-xs",
      "font-semibold",
      "rounded-full"
    );
  });
});
