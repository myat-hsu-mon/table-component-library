import { memo } from "react";
import { LightBulbIcon } from "@heroicons/react/20/solid";

export default memo(function NoContent() {
  return (
    <div className="flex h-96 flex-col items-center justify-center space-y-4">
      <div className="mx-auto h-16 w-16 text-gray-300">
        <LightBulbIcon data-testid="lightbulb-icon" />
      </div>
      <div className="text-center">
        <p className="py-1 text-center text-base font-medium text-gray-dark">
          No Records Found!
        </p>
      </div>
    </div>
  );
});
