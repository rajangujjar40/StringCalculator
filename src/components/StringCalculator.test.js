import { add } from "../utils";

describe("String Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum for two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test("should show all negative numbers in the error", () => {
    expect(() => add("1,-2,-3")).toThrow(
      "negative numbers not allowed: -2, -3"
    );
  });
});
