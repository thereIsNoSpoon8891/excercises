////////////////////////**STRING METHODS**////////////////////////////////////////////////

//Write a function that takes a string as a parameter and returns the same 
//string in all capital letters followed by all lowercase letters.

function capilizeAndLowercase(string){
    
   const upperCase = string.toUpperCase();
   const lowerCase = string.toLowerCase();   
   return upperCase + lowerCase
}

 let mixedWord = capilizeAndLowercase('Hello')

console.log(mixedWord)

//Write a function that takes a string as 
//a parameter and returns a number that is half the string's length, rounded down.
// how do we find the length of the string? .length
// how do we find the middle point of the length? length divided by 2, will cut the number in half

function findMiddleIndex(string){
      

      return Math.floor(string.length/2)
}
const numberWord = findMiddleIndex('Hello world')

console.log(numberWord)


// Write a function that uses slice() and the other functions
// you've written to return the first half of the given string.

function returnFirstHalf(string){

   const middleIndex =  findMiddleIndex(string)
   const negativeIndex = string.slice(0,middleIndex)
   return negativeIndex
   // returning the second half, NOT the first half. WHY? because the number is a positive interger...
   // how do I make it a negative interger in order to slice the last half, instead of the first half?
}  //  ANSWERED!!!! use slice(starting index, how many you want sliced)

const halfString = returnFirstHalf('Hello World')
console.log(halfString)

//Write a function that takes a string as a parameter and returns that string where 
//the first half is capitalized, 
//and the second half is lowercase.
//Hint: If your string length is odd, use Math.floor() to round down.

function capilizeWithLowercase(string){

   const middle = findMiddleIndex(string)
   const firstHalf = string.slice(0,middle) // first argument is the start point, 
   const secondHalf = string.slice(middle)// second arguement is the number of indexes to slice
   const secondHalfUpperCase = secondHalf.toUpperCase()
   const firstHalfLowerCase = firstHalf.toLowerCase()
   
   return firstHalfLowerCase + secondHalfUpperCase

}

const splitCapsWord = capilizeWithLowercase('Hello World!!, add as many strings as you want, it will stay at the center')

console.log(splitCapsWord)