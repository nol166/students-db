const names = [
  "Rita",
  "Celia",
  "Fiona",
  "Selena",
  "Krista",
  "Jenny",
  "Laura",
  "Val",
  "Lucy",
  "Kim",
  "Amara",
  "Camila",
  "Jada",
  "Imani",
  "Jasmine",
  "Isabella",
  "Martina",
  "Anita",
  "Raksha",
  "Abir",
  "Malik",
  "Christopher",
  "Gabriel",
  "Luis",
  "Lee",
  "Eric",
  "Aaron",
  "Tyson",
  "Zack",
  "Marty",
  "Nigel",
  "Vincent",
  "Lance",
  "Wayne",
  "Jeremy",
  "Jay",
  "Pedro",
  "Darryl",
  "Han ",
  "Farahd",
  "Kamal",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const appDescriptions = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Bookshelf app",
  "Calculator app",
  "Music app",
  "Random Quote Generator",
  "Flappy bird clone",
  "Tic-Tac-Toe",
  "Star Wars Facts",
  "Dice Game",
  "Mario Run",
  "Poker",
  "Deliveries",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };
