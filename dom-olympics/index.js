
// title

let header = document.querySelector('#header');

header.textContent = ('JavaScript Made This!!');

header.className = ('header');

//author
let mySubtitle = document.createElement('span');

mySubtitle.textContent = "Shane Rowland";

let author = document.getElementById('header');

//mySubtitle.className = ('name');

mySubtitle.style.color = 'green';

header.style.color = 'black';

author.append(mySubtitle);

// wrote the JavaScript////// NEED HELP HERE

let span = document.createElement('span');


span.textContent = " wrote the JavaScript";

span.style.color = "black";

mySubtitle.append(span);

// chat box

let clear = document.getElementById('clear-button');

clear.addEventListener('click', erase);

// clear button 

const messages = document.querySelectorAll(".messages");

function erase() {
    for (i = 0; i < messages.length; i++){
        messages[i].textContent = ""
    }
   
}

// drop down menu

let drop1 = document.getElementById('theme-drop-down');

drop1.addEventListener('change', blueBrown);

let leftMessages = document.querySelectorAll('.left')

let rightMessages = document.querySelectorAll('.right')

function blueBrown(){
    
    if (drop1.value === 'theme-one'){
        for (i =0; i<leftMessages.length; i++){
            leftMessages[i].style.backgroundColor = 'burlywood'
        
        } for (i =0; i<rightMessages.length; i++){
            rightMessages[i].style.backgroundColor = 'lightblue'
        }
    } else if (drop1.value === 'theme-two'){
          for (i =0; i<leftMessages.length; i++){
            leftMessages[i].style.backgroundColor = 'red'
            leftMessages[i].style.color = 'white'
        
        } for (i =0; i<rightMessages.length; i++){
            rightMessages[i].style.backgroundColor = 'black'
            rightMessages[i].style.color = 'white'
        }
    }
}


// submit text form






form.addEventListener("submit", function(event){
        event.preventDefault()//prevents page from reloading

        user1.append(textEntry.value) // user1 = left side messages
        
        const form = document.message//

        let textEntry = document.getElementById('input')//chat input box
        
        let user1 = document.querySelector('.left')// place text on left 
        
        let user2 = document.querySelector('.right')// place text on right
        
        let newLine = document.createElement('div')// new text line
        
        // Use a ternary instead
        newLine.id =
        if (newLine === div){
            newLine.id = 'left'
        }if(newline.id === 'left' ) {
            newLine.id = 'right'
        }if(newLine.id === "right"){
            newLine.id = 'left'
        }// give ID left or right

        //place new div on left or right
        newLine.id = 
        //append new value
        
})

































