const { isClass } = require("./utilities");
const Bird = require("../src/bird");

let bird = null;

describe("Birds", () => {
  beforeEach(() => {
    bird = new Bird();
  });

  describe("The bird class", () => {
    test("should be a class", () => {
      expect(isClass(Bird)).toBe(true);
    });
  });
});