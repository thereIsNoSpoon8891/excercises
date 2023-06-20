///////////////////**constructor function exercise**///////////
const employees = []

function Onboard(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;             // Override the status attribute of one of them to either "Part Time"
    this.status = status || "Full Time";   
    this.printEmployeeform = function(){  
         // the status is hard coded to 'Full Time' unless a argument is provided during instantiation
        
    console.log("Name: " + name, "Job Title: " + jobTitle,"Salary: " + salary, "Status: " + this.status)
    }
    
}
// Instantiate three employees

const ceo = new Onboard("Rick", "scientist", "$100/hr")

const sideKick = new Onboard("Morty", "assistant", "$3/hr", )

const substituteSideKick = new Onboard("Summer", "assistant", "$50/hr", "Part Time")

const alien = new Onboard("E.T.", "alien", "spaceship Pilot", "$1k/hr")


//Call the printEmployeeForm method for each employee

ceo.printEmployeeform()
sideKick.printEmployeeform()
substituteSideKick.printEmployeeform()

//Put the generated employees into the employees array using whichever method you prefer.

employees.push(ceo, sideKick, substituteSideKick, alien)//grab the array 
                                                //grab the all objects in the array 
                                                //remove the last key value pair in every object

employees.forEach(item => {       // Removed the last key=value pair from each object using forEach() method 
    delete item.printEmployeeform ////and deconste KEYWORD
})

console.log(employees)