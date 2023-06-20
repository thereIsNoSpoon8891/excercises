let mySquare = document.querySelector('div')

mySquare.addEventListener('mouseover', makeItBlue)

function makeItBlue(){
    mySquare.style.backgroundColor = 'blue';
    
}

mySquare.addEventListener('mousedown', makeItRed)

function makeItRed(){
    mySquare.style.backgroundColor = ('red')
}

mySquare.addEventListener('mouseup', makeItYellow)

function makeItYellow(){
    mySquare.style.backgroundColor = ('yellow')
}

mySquare.addEventListener('dblclick', makeItGreen)

function makeItGreen(){
    mySquare.style.backgroundColor = ('green')
}

window.addEventListener('wheel', makeItOrange)

function makeItOrange(){
    mySquare.style.backgroundColor = ('orange')
}


document.addEventListener('keypress', onKeyPress);

function onKeyPress(event) {
    if (event.key === 'b'){
        makeItBlue()
    } else if (event.key === 'r'){
        makeItRed()
    } else if (event.key === 'y'){
        makeItYellow()
    } else if (event.key === 'g'){
      makeItGreen()
    } else if (event.key === 'o'){
        makeItOrange()
    }
}
