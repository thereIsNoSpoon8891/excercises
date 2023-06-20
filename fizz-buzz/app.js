

let fizz = "fizz"
let buzz = "buzz"
let fizzBuzzz = "fizzbuzz"
let fizzArray = []
    
 function fizzBuzz(){  
    for (i =0; i <=100; i++) {
   fizzArray.push([i])
 if (i % 3 === 0){
    fizzArray.pop(i)
    fizzArray.push(fizz)
    //console.log("fizz")
   //console.log("fizz")
 } 
 if (i % 5 === 0) {
    fizzArray.pop(i)
    fizzArray.push(buzz)
    //console.log('buzz')
 }
 if (i % 3 === 0 && i % 5 === 0){
    fizzArray.pop(i)
    fizzArray.push(fizzBuzzz)
    //console.log( "fizzbuzz")
 }
 if(i % 3 !== 0 || i % 5 !==0){
    //console.log(i)
        } 
    }
}

//console.log(fizzBuzz())
fizzBuzz()

console.log(fizzArray)
     
 // switch and case is NOT working... why?????
 
 /*function number(){
    for (i = 0; i <= 100; i++){
 
switch (i) {
  case i % 3 === 0:
    console.log('works');
    break;
  case i % 5 === 0:
    console.log('works2')
    break;
case i % 3 === 0 && i % 5 === 0:
    console.log("test3")
  
    default:
    console.log(i);
        }
    }
}
console.log(number())*/