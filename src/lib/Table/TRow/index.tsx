import Checkbox from "../../../components/Checkbox";
import Department from "../../../components/Department";
import FormatDate from "../../../components/FormatDate";
import Profile from "../../../components/Profile";
import Status from "../../../components/Status";
import { classNames, formatUSCurrency, getFormattedDate } from "../../../utils";

import { Employee } from "../../../interfaces";

interface TRowProps {
  data: Employee;
  checked: boolean;
  onChange: (rowId: number) => void;
}

export default function TRow({ data, checked, onChange }: TRowProps) {
  const formattedDate = getFormattedDate(data.paymentDate);

  return (
    <tr className={classNames({ "bg-gray-light": checked })}>
      <td
        className={classNames(
          "whitespace-nowrap py-4 pl-2 pr-2 text-center text-sm",
          { "border-l-4 border-blue": checked },
        )}
      >
        <Checkbox checked={checked} onChange={() => onChange(data.id)} />
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
        <Profile name={data.employeeName} key={data.employeeName} />
      </td>
      <td className="whitespace-nowrap py-4 pr-3">
        <Department department={data.department} />
      </td>
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-gray-dark">
        {formatUSCurrency(data.salary)}
      </td>
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-gray-dark">
        <FormatDate formattedDate={formattedDate} />
      </td>
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-gray-dark">
        <Status status={data.paymentStatus} />
      </td>
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-gray-dark">
        {data.details}
      </td>
    </tr>
  );
}
