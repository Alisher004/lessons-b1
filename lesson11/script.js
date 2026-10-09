let input = document.getElementById("input")
let today = document.getElementById("today")
let after = document.getElementById("after")
let todaylist = document.getElementById("todaylist")
let futurelist = document.getElementById("futurelist")

function addtask(list){
    let inputText = input.value.trim()
    let textItem = document.createElement('li')
    textItem.innerHTML = `<input type="checkbox"> ${inputText} <button class='remove'>remove</button>`
    list.appendChild(textItem)
    input.value = ""

    textItem.querySelector(".remove").addEventListener("click", function(){
        textItem.remove()
    })
}

today.addEventListener("click", function(){
    addtask(todaylist)
})

after.addEventListener("click", function(){
    addtask(futurelist)
})