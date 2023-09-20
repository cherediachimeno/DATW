const Animal = require("../src/animal");
const { isClass } = require("./utilities");

let animal = null;

describe("Animals", () => {
  beforeEach(() => {
    animal = new Animal();
  });

  describe("The Animal class", () => {
    test("should be a class", () => {
      expect(isClass(Animal)).toBe(true);
    });

    test("should have properties named name, sound, and legs", () => {
      expect(animal).toHaveProperty("name");
      expect(animal).toHaveProperty("sound");
      expect(animal).toHaveProperty("legs");
    });
  });

  describe("The getOlder method", () => {
    test("should exist on the Animal prototype", () => {
      expect(animal).toHaveProperty("getOlder");
    });
    beforeEach(() => {
      animal.age = 2;
    });
    test("should increase the age by one and return the new value", () => {
      expect(animal.getOlder()).toBe(3);
      expect(animal.getOlder()).toBe(4);
    });
  });

  describe("The speak method", () => {
    test("should exist on the Animal prototype", () => {
      expect(animal).toHaveProperty("speak");
    });

    test("should return the sound when called", () => {
      const sampleSound = "tweet!";
      animal.sound = sampleSound;
      expect(animal.speak()).toBe(sampleSound);
    });
  });
});
