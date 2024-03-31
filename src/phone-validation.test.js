const { telephoneCheck } = require("./phone-validation"); // Assuming telephoneCheck is defined in a separate file

describe("telephoneCheck", () => {
  test("returns a boolean", () => {
    expect(typeof telephoneCheck("555-555-5555")).toBe("boolean");
  });

  test("returns true for valid phone numbers", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
    expect(telephoneCheck("5555555555")).toBe(true);
    expect(telephoneCheck("555-555-5555")).toBe(true);
    expect(telephoneCheck("(555)555-5555")).toBe(true);
    expect(telephoneCheck("1(555)555-5555")).toBe(true);
    expect(telephoneCheck("1 555 555 5555")).toBe(true);
    expect(telephoneCheck("1 456 789 4444")).toBe(true);
  });

  test("returns false for invalid phone numbers", () => {
    expect(telephoneCheck("555-5555")).toBe(false);
    expect(telephoneCheck("5555555")).toBe(false);
    expect(telephoneCheck("1 555)555-5555")).toBe(false);
    expect(telephoneCheck("123**&!!asdf#")).toBe(false);
    expect(telephoneCheck("55555555")).toBe(false);
    expect(telephoneCheck("(6054756961)")).toBe(false);
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
    expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
    expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
    expect(telephoneCheck("2 757 622-7382")).toBe(false);
    expect(telephoneCheck("10 (757) 622-7382")).toBe(false);
    expect(telephoneCheck("27576227382")).toBe(false);
    expect(telephoneCheck("(275)76227382")).toBe(false);
    expect(telephoneCheck("2(757)6227382")).toBe(false);
    expect(telephoneCheck("2(757)622-7382")).toBe(false);
    expect(telephoneCheck("555)-555-5555")).toBe(false);
    expect(telephoneCheck("(555-555-5555")).toBe(false);
    expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
    expect(telephoneCheck("55 55-55-555-5")).toBe(false);
    expect(telephoneCheck("11 555-555-5555")).toBe(false);
  });
});
