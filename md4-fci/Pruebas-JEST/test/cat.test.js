const { isClass } = require("./utilities");
const Cat = require("../src/cat");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    test("should be a class", () => {
      expect(isClass(Cat)).toBe(true);
    });

    test("should have the property name, sound, age...", () => {
      expect(cat).toHaveProperty("name");
      expect(cat).toHaveProperty("sound");
      expect(cat).toHaveProperty("age");
    });
  });
});