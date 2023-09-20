const { isClass } = require("./utilities");
const Poodle = require("../src/poodle");

let poodle = null;

describe("Poodles", () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

  describe("The Poodle class", () => {
    test("should be a class", () => {
      expect(isClass(Poodle)).toBe(true);
    });

    test("should have many haircuts", () => {
      let haircuts = poodle.lifetimeHaircuts();
      expect(haircuts).toEqual(7);
    });
  });
});