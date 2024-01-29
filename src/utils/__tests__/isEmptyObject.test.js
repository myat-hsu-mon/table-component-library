import { isEmptyObject } from "..";

describe("isEmptyObject function", () => {
  test("returns true for an empty object", () => {
    const obj = {};
    const result = isEmptyObject(obj);

    expect(result).toBe(true);
  });

  test("returns false for an object with properties", () => {
    const obj = { key: "value" };
    const result = isEmptyObject(obj);

    expect(result).toBe(false);
  });

  test("returns true for an object with no own properties", () => {
    const obj = Object.create(null);
    const result = isEmptyObject(obj);

    expect(result).toBe(true);
  });
});
