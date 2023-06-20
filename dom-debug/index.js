const colors = ["-select color-", "red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }

    
    dropDown.addEventListener("change", function(e){
        //e.target. understand this concept
        let drop1 = e.target.parentElement
      
        if(e.target.value === "-select color-"){
            drop1.style.backgroundColor = 'transparent'
        }else if(e.target.value === 'red'){
            drop1.style.backgroundColor = 'red'
        } else if(e.target.value === 'green'){
            drop1.style.backgroundColor = 'green'
        } else if(e.target.value === 'blue'){
            drop1.style.backgroundColor = 'blue'
        }

    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value

    //output.textContent = input.value

    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


