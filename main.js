// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
const arr = [4, 9, 16, 25, 36];
const newArr = arr.map(Math.sqrt);
console.log("The square root of each of the numbers are" , newArr);

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
const price = [{item: "turkey", cost: 69.69}, {item: "pizza", cost: 420}, {item: "beans", cost: 16}];
const i = 0; 

const value = price.map(money => money.cost)

const sumTotal = value.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    i
)

console.log("The total of all items purchased is" , sumTotal);


// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const items = ['penny', 'maze', 'iguana', 'alamo', 'bowl'];

const results = items.filter(item => item.length > 4);

console.log("Items with more than 4 letters" , results);