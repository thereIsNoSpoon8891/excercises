////////////////////////*****forception****//////////////////////////

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"



    function forception(people, alphabet){
    
        const upperCaseAlphabet = alphabet.toUpperCase();////makes the string all uppercase
        //console.log(upperCaseAlphabet);
        
        const alphabetArray = upperCaseAlphabet.split("");///// turns the alphabet string into an array
        //console.log(alphabetArray)
        people.push(alphabetArray)// push the alphabet array into the people array
        //console.log(people)
        
    for (i = 0; i < people.length; i++) {
        for (j = 0; j < people[i].length; j++) {
            return forceptionArray.push(people[i][j])
            
        }
    }
}


forception(people, alphabet)

const forceptionArray = []

console.log(forceptionArray)






