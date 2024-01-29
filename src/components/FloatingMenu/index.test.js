import { render, screen, fireEvent } from "@testing-library/react";

import FloatingMenu from ".";

describe("FloatingMenu component", () => {
  test("renders valid menu items", () => {
    const menuItems = ["Archive", "Download", "Edit"];
    const onMenuItemClick = jest.fn();

    render(
      <FloatingMenu menuItems={menuItems} onMenuItemClick={onMenuItemClick} />,
    );

    expect(screen.getByTestId("Archive")).toBeInTheDocument();
    expect(screen.getByTestId("Download")).toBeInTheDocument();
    expect(screen.getByTestId("Edit")).toBeInTheDocument();
  });

  test("clicking on a menu item calls onMenuItemClick", () => {
    const menuItems = ["Archive", "Download", "Edit"];
    const onMenuItemClick = jest.fn();

    render(
      <FloatingMenu menuItems={menuItems} onMenuItemClick={onMenuItemClick} />,
    );

    fireEvent.click(screen.getByTestId("Archive"));
    expect(onMenuItemClick).toHaveBeenCalledWith("Archive");

    fireEvent.click(screen.getByTestId("Download"));
    expect(onMenuItemClick).toHaveBeenCalledWith("Download");

    fireEvent.click(screen.getByTestId("Edit"));
    expect(onMenuItemClick).toHaveBeenCalledWith("Edit");
  });

  test("renders invalid menu items message", () => {
    const invalidMenuItems = ["InvalidOption1", "InvalidOption2"];
    const onMenuItemClick = jest.fn();

    render(
      <FloatingMenu
        menuItems={invalidMenuItems}
        onMenuItemClick={onMenuItemClick}
      />,
    );

    expect(screen.getByText("Invalid Menu Items!")).toBeInTheDocument();
  });
});
