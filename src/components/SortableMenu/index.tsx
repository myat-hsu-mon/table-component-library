import React, { forwardRef, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { classNames } from "../../utils";
import { SortIcon } from "../../assets";

import { Employee } from "../../interfaces";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

type SortKey = "paymentDate" | "employeeName" | "salary";
type SortOrder = "asc" | "desc";

interface SortOption {
  id: number;
  label: string;
  key: SortKey;
  order: SortOrder;
}

const sortOptions: SortOption[] = [
  {
    id: 1,
    key: "employeeName",
    label: "Sort By Employee Name (Asc)",
    order: "asc",
  },
  {
    id: 2,
    key: "employeeName",
    label: "Sort By Employee Name (Desc)",
    order: "desc",
  },
  { id: 3, key: "salary", label: "Sort By Salary (Asc)", order: "asc" },
  { id: 4, key: "salary", label: "Sort By Salary (Desc)", order: "desc" },
  {
    id: 5,
    key: "paymentDate",
    label: "Sort By Payment Date (Newest)",
    order: "desc",
  },
  {
    id: 6,
    key: "paymentDate",
    label: "Sort By Payment Date (Oldest)",
    order: "asc",
  },
];

// Function to sort data based on the selected key and order
const sortData = (
  data: Employee[],
  key: SortKey,
  order: SortOrder,
): Employee[] => {
  return [...data].sort((a, b) => {
    if (key === "salary") {
      return order === "asc" ? a[key] - b[key] : b[key] - a[key];
    } else {
      return order === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    }
  });
};

interface SortableMenuProps {
  data: Employee[];
  setSortedData: React.Dispatch<React.SetStateAction<Employee[]>>;
}

interface SortingMenuItemProps {
  active: boolean;
  option: SortOption;
}

export default function SortableMenu({
  data,
  setSortedData,
}: SortableMenuProps) {
  const [sortKey, setSortKey] = useState<SortKey>("employeeName");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [id, setId] = useState<number>(1);

  // Update the sorted data when sorting options or data change
  useEffect(() => {
    setSortedData(sortData(data, sortKey, sortOrder));
  }, [data, setSortedData, sortKey, sortOrder]);

  // Handle sorting when a menu option is selected
  const handleSort = (option: SortOption) => {
    setId(option.id);
    setSortKey(option.key);
    setSortOrder(option.order);
  };

  const SortingMenuItem = forwardRef(
    ({ active, option }: SortingMenuItemProps, ref) => {
      const checked = id === option.id;

      return (
        <div className="py-0.5">
          <div
            className={classNames(
              "my-1 flex w-full cursor-pointer items-center space-x-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-gray-100",
              active ? "bg-gray-100 text-gray-dark" : "text-gray",
            )}
            onClick={() => handleSort(option)}
          >
            <CheckCircleIcon className={`${checked && "text-blue"} h-5 w-5`} />
            <span className={`${checked && "text-blue"}`}>{option.label}</span>
          </div>
        </div>
      );
    },
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        data-testid="button"
        className="inline-flex w-full justify-center rounded-md border border-gray-200 bg-white p-2 text-sm font-medium text-gray-dark shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-0"
      >
        <SortIcon />
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-dark ring-opacity-5 focus:outline-none">
          <div className="divide-y divide-gray-200 px-3 py-2">
            {sortOptions.map((option) => (
              <Menu.Item key={option.label}>
                {({ active }) => (
                  <SortingMenuItem option={option} active={active} />
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
