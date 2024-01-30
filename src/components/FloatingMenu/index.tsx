import { ComponentType } from "react";
import { Tooltip } from "react-tooltip";

import {
  ArchiveIcon,
  DeleteIcon,
  DetailIcon,
  DownloadIcon,
  EditIcon,
  ShareIcon,
  TagIcon,
} from "../../assets";
import { classNames } from "../../utils";

interface MenuItemProps {
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const menus: MenuItemProps[] = [
  { label: "Archive", icon: ArchiveIcon },
  { label: "Share", icon: ShareIcon },
  { label: "Download", icon: DownloadIcon },
  { label: "Detail", icon: DetailIcon },
  { label: "Tag", icon: TagIcon },
  { label: "Edit", icon: EditIcon },
  { label: "Delete", icon: DeleteIcon },
];

// Function to check if provided menu items are valid
const isValidMenuItems = (menuItems: string[]): boolean => {
  if (!menuItems.length) return false;
  const validMenuItems: string[] = [
    "archive",
    "share",
    "download",
    "detail",
    "tag",
    "edit",
    "delete",
  ];

  return menuItems.every((item) => validMenuItems.includes(item.toLowerCase()));
};

interface FloatingMenuProps {
  menuItems: string[];
  onMenuItemClick: (menuItem: string) => void;
}

interface MenuItemProps {
  label: string;
  icon: ComponentType<{ className?: string }>;
}

export default function FloatingMenu({
  menuItems,
  onMenuItemClick,
}: FloatingMenuProps) {
  const isValidMenu = isValidMenuItems(menuItems);

  // Filter out valid menu items from the predefined list
  const validMenuItems = menus.filter((menu) =>
    menuItems
      .map((item) => item.toLowerCase())
      .includes(menu.label.toLowerCase()),
  );

  const MenuItem = ({ label, icon: Icon }: MenuItemProps) => (
    <button
      data-testid={label}
      data-tooltip-id={label}
      data-tooltip-content={label}
      onClick={() => onMenuItemClick(label)}
      className="mx-1.5 my-0.5 inline-block rounded-md p-2 hover:bg-[#C8E4FF] hover:bg-opacity-25 focus:outline-none focus:ring-0"
    >
      <Icon aria-hidden="true" />
      <Tooltip id={label} />
    </button>
  );

  return (
    <div
      className={classNames(
        "fixed bottom-4 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-[#102A43] px-6 py-1 shadow-md",
        { "bg-red-400": !isValidMenu },
      )}
    >
      {isValidMenu ? (
        <>
          {validMenuItems.map(({ label, icon }) => (
            <MenuItem key={label} label={label} icon={icon} />
          ))}
        </>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
}

const ErrorMessage = () => (
  <div className="py-2 text-center text-base text-white">
    Invalid Menu Items! <br />
    <span className="block text-sm font-light">
      Valid options: Archive, Share, Download, Detail, Tag, Edit, Delete.
    </span>
  </div>
);
