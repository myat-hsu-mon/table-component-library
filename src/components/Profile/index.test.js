import { render, screen } from "@testing-library/react";

import Profile from ".";

jest.mock("../../utils", () => ({
  getUserAvatar: jest.fn((name) => name.charAt(0).toUpperCase()),
  getRandomColor: jest.fn(() => "#123456"),
}));

describe("Profile component", () => {
  test("renders Profile component correctly", () => {
    const name = "John Doe";

    render(<Profile name={name} />);

    const nameElement = screen.getByText(name);

    expect(nameElement).toBeInTheDocument();
  });
});
