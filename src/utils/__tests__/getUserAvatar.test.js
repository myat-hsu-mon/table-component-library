import { getUserAvatar, getRandomColor } from "..";

describe("getUserAvatar function", () => {
  test("returns uppercase initials for a single-word name", () => {
    const userName = "john";
    const result = getUserAvatar(userName);

    expect(result).toBe("J");
  });

  test("returns uppercase initials for a multi-word name", () => {
    const userName = "john doe";
    const result = getUserAvatar(userName);

    expect(result).toBe("JD");
  });

  test("handles empty string", () => {
    const userName = "";
    const result = getUserAvatar(userName);

    expect(result).toBe("");
  });
});

describe("getRandomColor function", () => {
  test("returns a string representing a color", () => {
    const result = getRandomColor();

    expect(result).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  test("returns one of the predefined colors", () => {
    const predefinedColors = [
      "#00BFD9",
      "#FFB834",
      "#9B51E0",
      "#F2C94C",
      "#27AE60",
      "#2D9CDB",
      "#2F80ED",
    ];

    const result = getRandomColor();

    expect(predefinedColors).toContain(result);
  });
});
