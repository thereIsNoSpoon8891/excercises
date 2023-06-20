var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//1. Remove the last item from the vegetable array.
let removedLastItem = vegetables.pop();
console.log(removedLastItem)

//2. Remove the first item from the fruit array.

let removedFirstItem = fruit.shift()
console.log(removedFirstItem)

//3. Find the index of "orange." *** The new index is 1 because of the removed item

let indexedItem = fruit.indexOf("orange")
console.log(indexedItem)

//4. Add that number to the end of the fruit array.

let addToEnd = fruit.push(1)
console.log(fruit)
//5. Use the length property to find the length of the vegetable array.*** 3 because of the 
// removed item

let lengthOFArray = vegetables.length
console.log(lengthOFArray)

//6. Add that number to the end of the vegetable array.

let add3 = vegetables.push(3)
console.log(vegetables)

//7. Put the two arrays together into one array. Fruit first. Call the new Array "food".

let food = fruit.concat(vegetables)
console.log(food)

//8. Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4,2)
console.log(food)
//9. Reverse your array.

food.reverse()
console.log(food)
//10. Turn the array into a string and return it.

let final = food.join()
console.log(final)
//If you've done everything correctly, the last step should print the following string
// to the console:


// 3,pepper,1,watermelon,orange,apple

//  what I got = 3,pepper,1,watermelon,orange,apple

