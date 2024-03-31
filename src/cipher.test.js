const { rot13 } = require("./cipher"); // Assuming rot13 is defined in a separate file

describe("rot13", () => {
  test('decodes "SERR PBQR PNZC" to "FREE CODE CAMP"', () => {
    expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
  });

  test('decodes "SERR CVMMN!" to "FREE PIZZA!"', () => {
    expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
  });

  test('decodes "SERR YBIR?" to "FREE LOVE?"', () => {
    expect(rot13("SERR YBIR?")).toBe("FREE LOVE?");
  });

  test('decodes "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe(
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    );
  });
});
