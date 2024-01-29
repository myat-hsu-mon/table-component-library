import { render, screen } from "@testing-library/react";

import FilterableMenu from ".";

describe("FilterableMenu component", () => {
  test("renders filterable menu with valid keys", () => {
    const filterKeys = ["department", "paymentStatus"];
    const setFilteredDataMock = jest.fn();
    render(
      <FilterableMenu
        filterKeys={filterKeys}
        setFilteredData={setFilteredDataMock}
      />,
    );
    expect(screen.getByTestId("Filters")).toBeInTheDocument();
  });
});
