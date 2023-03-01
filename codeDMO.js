// Sample items in the cart
const cartItems = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Socks", price: 5, quantity: 3 },
];

// Function to calculate the total price of the cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
  

// Function to apply a discount to the cart
function applyDiscount(cart, discountPercent) {
  const discountFactor = 1 - (discountPercent / 100);
  cart.forEach(item => {
    item.price = item.price * discountFactor;
  });
}

// Print the original cart and total price
console.log("Original cart:");
console.log(cartItems);
console.log("Total price:", calculateTotalPrice(cartItems));

// Apply a 10% discount and print the updated cart and total price
applyDiscount(cartItems, 10);
console.log("Discounted cart:");
console.log(cartItems);
console.log("Total price with discount:", calculateTotalPrice(cartItems));// Sample items in the cart
const cartItems = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Socks", price: 5, quantity: 3 },
];

// Function to calculate the total price of the cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
}

// Function to apply a discount to the cart
function applyDiscount(cart, discountPercent) {
  const discountFactor = 1 - (discountPercent / 100);
  cart.forEach(item => {
    item.price = item.price * discountFactor;
  });
}

// Print the original cart and total price
console.log("Original cart:");
console.log(cartItems);
console.log("Total price:", calculateTotalPrice(cartItems));

// Apply a 10% discount and print the updated cart and total price
applyDiscount(cartItems, 10);
console.log("Discounted cart:");
console.log(cartItems);
console.log("Total price with discount:", calculateTotalPrice(cartItems));