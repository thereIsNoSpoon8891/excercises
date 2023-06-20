//////////////////////////*****PROBLEM SOLVING PRACTICE *****////////////////////////////////////

////////Write a function that takes an array of numbers and returns the largest (without using Math.max())

const arrayOne = [6, 13, 250, 3 ]
const arrayTwo = [3, 5, 2, 8, 1]
const arrayThree = [-13, 40, 3, 0, 19, 22]

function largest (array) {
    //use sort then pop?//sort, sorts values as strings, use a compare function to fix this
    const sorted = array.sort(function(a, b){return a - b})//the compare function compares all the values in an 
    return sorted.pop()// array two values at a time (a, b) and subtracts a from b, if it is negative, it will 
                        // sort a as lower value than b, if it is positive it will sort a as a higher number
}                       // than b
                        // The TA Adeeb provided a better solution in the app1.js useing a for loop 
const sortedArrayOne = largest(arrayOne)
const sortedArrayTwo = largest(arrayTwo)
const sortedArrayThree = largest(arrayThree)
console.log(sortedArrayOne)
console.log(sortedArrayTwo)
console.log(sortedArrayThree)



//Write a function that takes an array of words and a character and returns 
//each word that has that character present.

const stringArrayOne = ["$hello!", "%%^%%", "test!"]
const stringArayTwo = ["#3", "$$$", "C%4!", "Hey!"]
const stringArrayThree = ["yellow", "green", "^up^", "down", "dog"]

const filteredArray = stringArrayOne.filter(string => string.includes('!'))
const anotherFilteredArray = stringArayTwo.filter(string => string.includes('$'))
const yetAnotherArray = stringArrayThree.filter(string => string.includes('^'))
//call the filter method on the array
// use anonymous function that uses the includes method to find the 
//elements that include a specified character
// these are array methods
console.log(filteredArray)
console.log(anotherFilteredArray)
console.log(yetAnotherArray)

//as a named function (this was hard!)

function find(array){
    return array.filter(array => array.includes('g'))
}
const result = find(stringArrayThree)
console.log(result)

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
if (num1 % num2 === 0) {// is the remainder of num1 and num2 0?
console.log('yes')
} else if(num1 % num2 !== 0){//is the remainder of num1 and num2 NOT 0?
    console.log('no')
}

}

isDivisible(101, 4)// 101/4 has a remainder of 1 so it is NOT equal to 0; false
isDivisible(100, 2)// 100/2 has a remainder of 0 so it is equal to 0; true
