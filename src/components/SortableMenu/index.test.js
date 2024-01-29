import { render, screen, fireEvent } from "@testing-library/react";

import SortableMenu from ".";

describe("SortableMenu component", () => {
  test("renders SortableMenu component correctly", async () => {
    const data = [
      { employeeName: "John Doe", salary: 50000, paymentDate: "2022-01-01" },
    ];

    const setSortedDataMock = jest.fn();

    render(<SortableMenu data={data} setSortedData={setSortedDataMock} />);
    const sortButton = screen.getByTestId("button");

    //check if the sorting menus are shown or not.
    fireEvent.click(sortButton);
    expect(screen.getByText("Sort By Employee Name (Asc)")).toBeInTheDocument();
    expect(screen.getByText("Sort By Employee Name (Desc)")).toBeInTheDocument();

    //check if one menu item, then call menu-items array
    fireEvent.click(screen.getByText("Sort By Employee Name (Asc)"));
    expect(setSortedDataMock).toHaveBeenCalledWith(expect.any(Array));
  });
});
