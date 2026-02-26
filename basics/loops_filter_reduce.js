const myarr = [1, 2, 3, 4, 5];


filteredArray = myarr.filter(x => x % 2 === 0);
console.log(filteredArray); // [2, 4] filter return the values that satisfy the condition

const sum = myarr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 15 reduce takes a function and an initial value and applies the function to each element of the array, accumulating the result
// reduce is used in cart to calculate the total price of items in the cart, for example:
const cart = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 20 },
    { name: 'item3', price: 30 }
];  
const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 60