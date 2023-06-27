let inventory = [
  { name: "iPhone 12", price: 1099.99, quantity: 5 },
  { name: "Samsung Galaxy S21", price: 899.99, quantity: 10 },
  { name: "Google Pixel 5", price: 799.99, quantity: 3 },
  { name: "Sony PlayStation 5", price: 499.99, quantity: 8 },
  { name: "Apple AirPods Pro", price: 249.99, quantity: 2 },
  { name: "Dell XPS 13", price: 1299.99, quantity: 6 },
  { name: "Nintendo Switch", price: 299.99, quantity: 12 },
  { name: "Bose QuietComfort 35 II", price: 349.99, quantity: 4 },
  { name: "Fitbit Charge 4", price: 149.99, quantity: 7 },
  { name: "GoPro Hero 9 Black", price: 449.99, quantity: 9 },
];

function addItem(name, price, quantity) {
  // create object with properties of name, price, and quantity
  // push item object to the inventory array
}

function removeItem(name) {
  // use .filter() to filter items that do not match name
}

function updateItem(name, price, quantity) {
  // loop over every array item
  // if given name matches a name in the inventory; update item with new price and quantity
}

function totalValue() {
  // loop over every array item
  // multiply item quanity and item price and add to total
  // after loop; return the total
}

// **FUNCTION TESTING**
// REMOVE COMMENTS TO USE

// addItem("Apple", 1.0, 10);
// addItem("Orange", 0.5, 20);
// addItem("Banana", 0.2, 30);
// console.log(inventory);
// console.log("Total value: ", totalValue());
// removeItem("Orange");
// console.log(inventory);
// updateItem("Apple", 1.2, 5);
// console.log(inventory);
// console.log("Total value: ", totalValue());
