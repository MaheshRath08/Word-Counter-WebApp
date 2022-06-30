let inputEl = document.getElementById("box")
let btnEl = document.getElementById("btn")
let result = document.getElementById("result")
let containerEl = document.getElementById("container")

btnEl.addEventListener("click", function(){
    blankReset()
    let content = inputEl.value
    let pureContent = content.replace(/\s/g, "") //To remove all the white spaces use /\s/g
    let length = pureContent.length   
    containerEl.style.transform = "scale(0)"
    result.style.transform = `scale(1)` 
    result.innerHTML = `Count is ${length} <button onclick="location.reload()">Reload</button>`
})
function blankReset(){            //to remove no input errors
    if(!(inputEl.value)){
        alert("Please type something!!!")
        location.reload()
    }
}

