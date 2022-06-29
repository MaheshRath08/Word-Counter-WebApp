let inputEl = document.getElementById("box")
let btnEl = document.getElementById("btn")
let result = document.getElementById("result")
let containerEl = document.getElementById("container")

btnEl.addEventListener("click", function(){
    let content = inputEl.value
    let length = content.length   
    containerEl.style.transform = "scale(0)"
    result.style.transform = `scale(1)` 
    result.innerHTML = `Word count is ${length} <button onclick="location.reload()">Reload</button>`
})