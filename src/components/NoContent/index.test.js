import { render, screen } from "@testing-library/react";

import NoContent from ".";

describe("NoContent component", () => {
  test("renders NoContent component correctly", () => {
    render(<NoContent />);

    const lightBulbIcon = screen.getByTestId("lightbulb-icon");
    const noRecordsText = screen.getByText("No Records Found!");

    expect(lightBulbIcon).toBeInTheDocument();
    expect(noRecordsText).toBeInTheDocument();
  });
});
