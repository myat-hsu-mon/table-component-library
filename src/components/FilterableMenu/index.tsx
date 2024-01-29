import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

import { FilterIcon } from "../../assets";
import employees from "../../data/index.json";
import { capitalize, classNames, isEmptyObject } from "../../utils";
import Button from "../Button";

import {
  DepartmentType,
  Employee,
  FilterKeyProp,
  StatusType,
} from "../../interfaces";

interface FilterableMenuProps {
  filterKeys: FilterKeyProp[];
  setFilteredData: Dispatch<SetStateAction<Employee[]>>;
}

const areFilterKeysValid = (filterKeys: FilterKeyProp[]): boolean => {
  if (!filterKeys.length) return false;

  const validKeys: FilterKeyProp[] = [
    "department",
    "paymentDate",
    "paymentStatus",
  ];
  return filterKeys.every((filter) => validKeys.includes(filter));
};

/**
 * Generates filtered options based on specified filter keys for a given list of employees.
 *
 * @param {Employee[]} data - The list of employees to filter.
 * @param {FilterKeyProp[]} filterKeys - The filter keys used to retain specific fields.
 * @returns {ReturnType} - The filtered options aggregated by unique values for each filter key.
 */
type NewType = string | number | DepartmentType | StatusType;
type FilteredOptionTypes = NewType[];
type ReturnType = Record<keyof Employee, FilteredOptionTypes>;
function generateFilteredOptions(
  data: Employee[],
  filterKeys: FilterKeyProp[],
): ReturnType {
  //remove unnecessary fields based on filterKeys
  const filteredFields = data.map((element) =>
    filterKeys.reduce((obj: any, key) => {
      if (key in element) {
        obj[key] = element[key];
      }
      return obj;
    }, {} as Partial<Employee>),
  );

  //Aggregate unique values for each filter
  return filteredFields.reduce((filteredOptions, employee) => {
    Object.keys(employee).forEach((k) => {
      const key = k as keyof Employee;
      if (!filteredOptions[key]) {
        filteredOptions[key] = [employee[key]];
      } else if (!filteredOptions[key].includes(employee[key])) {
        filteredOptions[key].push(employee[key]);
      }
    });
    return filteredOptions;
  }, {} as ReturnType);
}

/**
 * Filters an array of employees based on the selected filtered items.
 *
 * @param {Record<string, string[]>} filteredItems - An object representing filter keys and their respective unique values
 * @returns {Employee[]} - An array of employees that satisfy the filter logics.
 */
const filterData = (filteredItems: Record<string, string[]>): Employee[] => {
  if (!Object.keys(filteredItems).length) return employees as Employee[];
  return (employees as Employee[]).filter((employee: Employee) =>
    Object.keys(filteredItems).every((key) =>
      filteredItems[key].includes(employee[key as keyof Employee] as string),
    ),
  );
};

const keyTitles: { [key: string]: string } = {
  paymentStatus: "Payment Status",
  paymentDate: "Payment Date",
  department: "Department",
};

export default function FilterableMenu({
  filterKeys,
  setFilteredData,
}: FilterableMenuProps) {
  const isValidFilters = areFilterKeysValid(filterKeys);

  const filteredOptions = generateFilteredOptions(
    employees as Employee[],
    filterKeys,
  );

  const [selectedFilteredItems, setSelectedFilteredItems] = useState<
    Record<string, string[]>
  >({});

  const handleFilter = (key: string, value: string) => {
    setSelectedFilteredItems((prevState) => {
      const newState = { ...prevState };

      if (!newState[key]) {
        newState[key] = [value];
      } else {
        const index = newState[key].indexOf(value);

        if (index === -1) {
          newState[key].push(value); // Add the value if it doesn't exist
        } else {
          newState[key].splice(index, 1); // Remove the value if it exists
          if (!newState[key].length) {
            // delete the key if the value is empty array
            delete newState[key];
          }
        }
      }
      // Filter data with the updated state
      const filteredEmployees = filterData(
        isEmptyObject(newState) ? {} : newState,
      );
      setFilteredData(filteredEmployees);

      return newState;
    });
  };

  const handleResetFilters = () => {
    setSelectedFilteredItems({});
    setFilteredData(filterData({}));
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="right-0 flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm outline-none">
            <FilterIcon aria-hidden="true" />
            <span className="text-sm text-gray-dark" data-testid="Filters">
              Filters
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-screen max-w-xs transform px-4 sm:max-w-sm sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-0">
                {isValidFilters ? (
                  <div className="relative grid gap-3  bg-white p-4">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold">Filters</h1>
                      <Button
                        icon={ArrowPathIcon}
                        onClick={handleResetFilters}
                      />
                    </div>
                    {Object.entries(filteredOptions).map(([key, values]) => (
                      <div key={key} className="rounded-md bg-gray-50 p-2">
                        <h1 className="mb-2 text-sm text-gray">
                          {keyTitles[key]}
                        </h1>
                        <div className="flex flex-wrap gap-2.5 rounded-md">
                          {values.map((value) => (
                            <button
                              key={value}
                              onClick={() => {
                                handleFilter(key, value as string);
                              }}
                              className={classNames(
                                "rounded-md bg-gray-200/70  px-3.5 py-1.5 text-sm text-gray-600",
                                {
                                  " bg-blue bg-opacity-20 text-blue":
                                    selectedFilteredItems[key]?.includes(
                                      value as string,
                                    ),
                                },
                              )}
                            >
                              {selectedFilteredItems[key]?.includes(
                                value as string,
                              )}
                              {capitalize(value as string)}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-8 text-center text-base text-gray-dark">
                    Invalid Filter Keys! <br />
                    <span className="mt-2 inline-block font-light">
                      Valid options: department, paymentStatus, paymentDate.
                    </span>
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
