import { ComponentType, SVGProps, memo } from "react";

import { capitalize } from "../../utils";
import { SalesIcon, SupportIcon, DesignsIcon } from "../../assets";

import { DepartmentType } from "../../interfaces";

interface DepartmentProps {
  department: DepartmentType;
}

const departmentIcons: Record<
  DepartmentType,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  sales: SalesIcon,
  designs: DesignsIcon,
  support: SupportIcon,
};

export default memo(function Department({ department }: DepartmentProps) {
  const Icon = departmentIcons[department];

  return (
    <div className="flex items-center space-x-1 text-sm">
      <Icon />
      <span className="text-gray" data-testid={`${department}-text`}>
        {capitalize(department)}
      </span>
    </div>
  );
});
