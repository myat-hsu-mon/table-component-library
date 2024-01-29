import { useState } from "react";

import THead from "./THead";
import TRow from "./TRow";

import Checkbox from "../../components/Checkbox";
import FilterableMenu from "../../components/FilterableMenu";
import FloatingMenu from "../../components/FloatingMenu";
import Input from "../../components/Input";
import SortableMenu from "../../components/SortableMenu";
import employees from "../../data/index.json";

import { Employee, FilterKeyProp, MenuItemProp } from "../../interfaces";
import NoContent from "../../components/NoContent";

interface TableProps {
  menuItems: MenuItemProp[];
  filterKeys: FilterKeyProp[];
}

export default function Table({ menuItems, filterKeys }: TableProps) {
  //sorted data
  const [sortedData, setSortedData] = useState<Employee[]>(
    employees as Employee[],
  );

  //filtered data
  const [filteredData, setFilteredData] = useState<Employee[]>(
    employees as Employee[],
  );

  //selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleToggleRowSelection = (rowId: number) => {
    const newSelectedRows = selectedRows.includes(rowId)
      ? selectedRows.filter((id) => id !== rowId)
      : [...selectedRows, rowId];

    setSelectedRows(newSelectedRows);
    setSelectAll(employees.length === newSelectedRows.length);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(employees.map((emp) => emp.id));
    }

    setSelectAll(!selectAll);
  };

  const TableHeader = (
    <div className="mt-4 rounded-md bg-gray-light p-3 sm:flex sm:items-center sm:justify-between">
      <Input
        onChange={(e) => {}}
        placeholder="Search for employees, salary amounts.."
      />
      <div className="ml-auto mt-3 flex items-center justify-end gap-2 sm:mt-0">
        <FilterableMenu
          filterKeys={filterKeys}
          setFilteredData={setFilteredData}
        />
        <SortableMenu data={filteredData} setSortedData={setSortedData} />
      </div>
    </div>
  );

  return (
    <div className="relative rounded-md border border-gray-light bg-white px-4 font-sans shadow-md sm:px-6 lg:px-8">
      {TableHeader}
      {!!sortedData.length ? (
        <div className="my-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="pl-2">
                    <td className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm">
                      <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </td>
                    <THead name="Employee" />
                    <THead name="Department" />
                    <THead name="Salary" />
                    <THead name="Payment Date" />
                    <THead name="Payment Status" />
                    <THead name="Details" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {sortedData.map((employee) => (
                    <TRow
                      data={employee as Employee}
                      key={employee.employeeName}
                      onChange={handleToggleRowSelection}
                      checked={selectedRows.includes(employee.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <NoContent />
      )}
      {!!selectedRows.length && (
        <FloatingMenu menuItems={menuItems} onMenuItemClick={() => {}} />
      )}
    </div>
  );
}
