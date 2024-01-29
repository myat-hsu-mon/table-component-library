import { memo } from "react";
import { classNames } from "../../utils";

interface FormatDateProps {
  formattedDate: string;
}

export default memo(function FormatDate({ formattedDate }: FormatDateProps) {
  const getStatusColor = () => {
    switch (formattedDate) {
      case "Yesterday":
        return "bg-red";
      case "In 2 days":
        return "bg-yellow";
      default:
        return "bg-green";
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div
        data-testid="status-color"
        className={classNames("h-2 w-2 rounded-full", getStatusColor())}
      />
      <span data-testid="formatted-date">{formattedDate}</span>
    </div>
  );
});
