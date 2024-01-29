import React, { useEffect, useState } from "react";
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
    label: "Employee Name (ASC)",
    order: "asc",
  },
  {
    id: 2,
    key: "employeeName",
    label: "Employee Name (DESC)",
    order: "desc",
  },
  { id: 3, key: "salary", label: "Salary (ASC)", order: "asc" },
  { id: 4, key: "salary", label: "Salary (DESC)", order: "desc" },
  {
    id: 5,
    key: "paymentDate",
    label: "Payment Date (Newest First)",
    order: "desc",
  },
  {
    id: 6,
    key: "paymentDate",
    label: "Payment Date (Oldest First)",
    order: "asc",
  },
];

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

export default function SortableMenu({
  data,
  setSortedData,
}: SortableMenuProps) {
  const [sortKey, setSortKey] = useState<SortKey>("employeeName");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    setSortedData(sortData(data, sortKey, sortOrder));
  }, [data, setSortedData, sortKey, sortOrder]);

  const handleSort = (option: SortOption) => {
    setId(option.id);
    setSortKey(option.key);
    setSortOrder(option.order);
  };

  const renderSortingMenuItem = ({
    active,
    option,
  }: {
    active: boolean;
    option: SortOption;
  }) => (
    <div className="py-0.5">
      <div
        className={classNames(
          "my-1 flex w-full cursor-pointer items-center space-x-2 rounded-md px-2 py-1.5 text-left text-sm",
          active ? "bg-gray-100 text-gray-dark" : "text-gray-700",
        )}
        onClick={() => handleSort(option)}
      >
        <CheckCircleIcon
          className={`${id === option.id && "text-blue"} h-5 w-5`}
        />
        <span>{option.label}</span>
      </div>
    </div>
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          data-testid="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-200 bg-white p-2 text-sm font-medium text-gray-dark shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-0"
        >
          <SortIcon />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-dark ring-opacity-5 focus:outline-none">
          <div className="divide-y divide-gray-200 px-3 py-2">
            {sortOptions.map((option) => (
              <Menu.Item key={option.label}>
                {({ active }) => (
                  <>{renderSortingMenuItem({ option, active })}</>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
