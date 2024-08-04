/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What
       would you want to have in them?

    4. Write these out first on paper/text to
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/
class Player {
   constructor(name, shape, color, shotsPerMinute, speed) {
   this.name = name;
   this.shape = shape;
   this.color = color;
   this.shotsPerMinute = shotsPerMinute;
   this.speed = speed;
   };
}

class Enemy {
   constructor(name, shape, color, width, verticalSpeed, lateralSpeed) {
      this.name = name;
      this.shape = shape;
      this.color = color;
      this.width = width;
      this.verticalSpeed = verticalSpeed;
      this.lateralSpeed = lateralSpeed;
      };
}

const destructor = new Player('Avenger', 'Destructor', 'Blue', 60, 1000);
const figther = new Player('Cherokee', 'Fighter', 'Silver', 20, 2000);
const ghost = new Player('Turpin', 'Ghost', 'Green', 100, 500, 500);
const wizard = new Player('Deathson', 'Wizard', 'Red', 200, 250, 500);


console.log(destructor);
console.log(figther);
console.log(ghost);
console.log(wizard);
