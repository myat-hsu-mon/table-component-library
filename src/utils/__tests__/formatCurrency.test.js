import { formatUSCurrency } from "..";

describe("formatUSCurrency function", () => {
  test("formats positive integer price correctly", () => {
    const price = 1234;
    const result = formatUSCurrency(price);

    expect(result).toBe("$1,234.00");
  });

  test("formats positive floating-point price correctly", () => {
    const price = 1234.56;
    const result = formatUSCurrency(price);

    expect(result).toBe("$1,234.56");
  });

  test("formats negative price correctly", () => {
    const price = -789.01;
    const result = formatUSCurrency(price);

    expect(result).toBe("-$789.01");
  });

  test("handles zero price correctly", () => {
    const price = 0;
    const result = formatUSCurrency(price);

    expect(result).toBe("$0.00");
  });
});
