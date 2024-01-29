import { classNames } from "..";

describe("classNames function", () => {
  test("merges and applies tailwind and additional classes", () => {
    const result = classNames("text-blue-500", "bg-red-300", "custom-class");

    expect(result).toBe("text-blue-500 bg-red-300 custom-class");
  });

  test("handles undefined and null values gracefully", () => {
    const result = classNames(undefined, null, "text-green-700");

    expect(result).toBe("text-green-700");
  });

  test("handles object and class values gracefully", () => {
    const result = classNames({ "bg-gray": false }, "text-green-700");

    expect(result).toBe("text-green-700");
  });
});
