import { memo } from "react";
import { StatusType } from "../../interfaces";
import { classNames } from "../../utils";

interface StatusProps {
  status: StatusType;
}

const statusStyles = {
  pending: "text-yellow-dark bg-yellow-light",
  failed: "text-red-dark bg-red-light",
  done: "text-green-dark bg-green-light",
};

export default memo(function Status({ status }: StatusProps) {
  const styleClasses = statusStyles[status] || "";

  return (
    <span
      className={classNames(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold",
        styleClasses,
      )}
    >
      {status.toUpperCase()}
    </span>
  );
});
