import { capitalize } from "..";

describe("capitalize function", () => {
  test("capitalizes the first letter of each word and lowercases the rest", () => {
    const input = "hello world";
    const result = capitalize(input);

    expect(result).toBe("Hello World");
  });

  test("handles empty string", () => {
    const input = "";
    const result = capitalize(input);

    expect(result).toBe("");
  });

  test("handles single-word string", () => {
    const input = "apple";
    const result = capitalize(input);

    expect(result).toBe("Apple");
  });
});
