

// kind of works.... logs the index numbers.... how to count them?
let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for (let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === 'computer'){
        
        console.log([i])
    }
}

///////////////////////////////////////////// only shows males over 18 and females under 18
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough and girls DON'T like Mad Max")
    
    } if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' IS old enough and guys LIKE Mad Max')
    } 
      
    
  }