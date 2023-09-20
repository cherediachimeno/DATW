const { isClass } = require("./utilities");
const Dog = require("../src/dog");

let dog = null;

describe("Dogs", () => {
  beforeEach(() => {
    dog = new Dog();
  });

  describe("The Dog class", () => {
    test("should be a class", () => {
      expect(isClass(Dog)).toBe(true);
    });

    test("should have properties for name, sticks, and breed", () => {
      expect(dog).toHaveProperty("name");
      expect(dog).toHaveProperty("sticks");
      expect(dog).toHaveProperty("breed");
    });

    test("should have have preset properties for sound and legs", () => {
      expect(dog.sound).toBe("woof");
      expect(dog.legs).toBe(4);
    });
  });

  describe("The getOlder method", () => {
    test("should exist on the Dog prototype", () => {
      expect(dog).toHaveProperty("getOlder");
    });

    test("should increase the age by 7 each time it is called", () => {
      dog.getOlder();
      dog.getOlder();
      dog.getOlder();
      expect(dog.age).toBe(22);
    });
  });

  describe("The fetch method", () => {
    test("should exist on the Dog prototype", () => {
      expect(dog).toHaveProperty("fetch");
    });

    test("should increase the sticks count each time it is called", () => {
      dog.fetch();
      dog.fetch();
      expect(dog.sticks).toBe(2);
    });
  });
});