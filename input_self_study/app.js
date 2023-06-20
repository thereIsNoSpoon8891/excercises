
let button = document.getElementById('submit')

button.addEventListener('click', log);

function log() {
    out.textContent = userIn.value
}

let userIn = document.getElementById('whiteBox')
let out = document.getElementById('output1')