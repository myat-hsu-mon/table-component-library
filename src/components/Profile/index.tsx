import { memo } from "react";
import { getUserAvatar, getRandomColor } from "../../utils";

export default memo(function Profile({ name }: { name: string }) {
  const backgroundColor = getRandomColor();
  const username = getUserAvatar(name);

  return (
    <div className="flex items-center">
      <div
        style={{ backgroundColor }}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs text-white"
      >
        {username}
      </div>
      <div className="ml-2">
        <div className="text-sm font-medium text-gray-dark">{name}</div>
      </div>
    </div>
  );
});
