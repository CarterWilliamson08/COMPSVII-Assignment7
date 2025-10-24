console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.

let favoriteFoods = ["Chicken", "Pizza", "Steak", "Turkey", "Potato Chips", "Salad"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
let i = 0;
while(i < favoriteFoods.length) {
  console.log(`One of my favorite foods is ${favoriteFoods[i]}`);
  i++;
}


// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
let ranking = 1;
let q = 0
while(q < favoriteFoods.length) {
  console.log(`My #${ranking} favorite food is ${favoriteFoods[q]}`);
  ranking++ && q++;;
}





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log(`Have you ever tried ${foodName}?`); 
  console.log(`I always recommend ${foodName}.`);
  console.log(`Trust me - ${foodName} is delicious.`);
}



// 4b. Call the function at least 3 times

printFoodRecommendation("Donuts");
printFoodRecommendation("Pizza");
printFoodRecommendation("Ramen");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

//PROFESSOR - I'm confused on how "Pizza" would not be included? 
let foodsWithA = [];

for (let food of friendFavorites) {
    if (food.toLowerCase().includes("a")) {
      foodsWithA.push(food);
    }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
console.log(foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];

for (let food of friendFavorites) {
  if (food.length > 6) {
    longFoodNames.push(food);
  }
}

//console.log(longFoodNames);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];

for (let food of friendFavorites) {
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}

//console.log(shortFoodNames);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
let longest = longFoodNames
if (shortFoodNames.length > longFoodNames) {
  longest = shortFoodNames
}

if (longest = longFoodNames) {
  console.log("There are more long-named foods.");
}else {
  console.log("There are more short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFood = friendFavorites[0]

for (let food of friendFavorites.slice(1)) {
  if (food.length > longestFood.length) {
    longestFood = food
  }
}

console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`)