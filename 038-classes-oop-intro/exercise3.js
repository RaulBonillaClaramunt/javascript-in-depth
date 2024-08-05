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
   lives = 3;
   shootingDelay = 2000;//ms
   yPosition = 500;//as a starting point
   xPosition = 500;//as a starting position
   constructor(name, shape, color, shootingPower, speed) {
   this.name = name;
   this.shape = shape;
   this.color = color;
   this.shootingPower = shootingPower;
   this.lives
   this.speed = speed;
   this.position
   };
}

class Enemy {
   lateralSpeed = 500;
   verticalSpeed = 500;
   hp = 1;//health power - they die if they get a shot
   shootingDelay = 9000;//slower than Player
   yPosition;//we just declare them and will assing values inside the constructor
   xPosition;//so not all the Enemies start at the same point but spread on the screen ;)
   constructor(name, shape, color, width) {
      this.name = name;
      this.shape = shape;
      this.color = color;
      this.width = width;
      this.shootingPower = shootingPower;
      this.score
      this.position
      };
}

const spaceShip = new Player('Avenger', 'Space Ship', 'White', 60, 1000);
const figther = new Enemy('Cherokee', 'Fighter', 'Silver', 20, 2000);
const ghost = new Enemy('Turpin', 'Ghost', 'Green', 100, 500, 500);
const wizard = new Enemy('Deathson', 'Wizard', 'Red', 300, 500, 500);


console.log(spaceShip);
console.log(figther);
console.log(ghost);
console.log(wizard);
