/*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/
class EnemyFactory {
  generateFlyingEnemy(name) {
    class FlyingEnemy {
      constructor(flyingEnemyName) {
        this.name = flyingEnemyName;
      }

      fly() {
        console.log(`${this.name} can fly!`);
      }
    }
    return new FlyingEnemy(name);
  }
}

EnemyFactory.generateSwimmingEnemy = function(name) {
  class SwimmingEnemy {
    constructor(swimmingEnemyName) {
      name = name;//equivalent to "this.name = name;"
    }

    swim() {
      console.log(`${this.name} can fly!`);
    }
  }
  return new SwimmingEnemy(name);
}



const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman");
flying.fly(); // batman can fly!

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim(); // aquaman can swim!


console.log(Object.getOwnPropertyNames(EnemyFactory));
console.log(Object.getOwnPropertyNames(factory));
console.log(Object.getOwnPropertyNames(factory.__proto__));
console.log(Object.getOwnPropertyNames(flying));
console.log(Object.getOwnPropertyNames(flying.__proto__));
console.log(Object.getOwnPropertyNames(flying.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(swimming));
console.log(Object.getOwnPropertyNames(swimming.__proto__));
console.log(Object.getOwnPropertyNames(swimming.__proto__.__proto__));

/*
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/
