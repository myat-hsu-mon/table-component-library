import { getFormattedDate } from "..";

const totalMillisecondsPerDay = 24 * 60 * 60 * 1000;

describe("getFormattedDate function", () => {
  test('returns "Yesterday" for a date 1 day ago', () => {
    const currentDate = new Date();
    const targetDateTime = new Date(
      currentDate.getTime() - totalMillisecondsPerDay,
    ).toISOString();
    const result = getFormattedDate(targetDateTime);

    expect(result).toBe("Yesterday");
  });

  test('returns "In 2 days" for a date 2 days from now', () => {
    const currentDate = new Date();
    const targetDateTime = new Date(
      currentDate.getTime() - 2 * totalMillisecondsPerDay,
    ).toISOString();
    const result = getFormattedDate(targetDateTime);

    expect(result).toBe("In 2 days");
  });

  test("returns formatted date for dates older than 2 days", () => {
    const currentDate = new Date();
    const olderDateTime = new Date(
      currentDate.getTime() - 3 * totalMillisecondsPerDay,
    ).toISOString();

    const result = getFormattedDate(olderDateTime);

    const olderDate = new Date(olderDateTime);
    const formattedDate = `${String(olderDate.getDate()).padStart(2, "0")}/${String(olderDate.getMonth() + 1).padStart(2, "0")}/${olderDate.getFullYear()}`;

    expect(result).toBe(formattedDate);
  });
});
