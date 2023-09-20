/* ----------------------

1. Afegeix les propietats "legs" i "sound" a la classe "Animal".
2. Afegeix el mètode "getOlder" de forma que incrementi
   per 1 l'"age" cada cop que l'invoquem, i que retorni
   el nou valor de "age".
3. Afegeix un nou mètode anomenat "speak" que retorni la
   propietat "sound" cada cop que l'invoquem.

---------------------- */

class Animal {
  constructor(name) {
    this.name = name;
    this.age = 1;
  }
}

module.exports = Animal;
