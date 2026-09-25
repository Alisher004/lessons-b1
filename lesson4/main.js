// localStorage.js
// let name = LocalStorage.setItem('name');

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

btn.addEventListener("click", () =>{
    // setItem -  малымат сактайт 
    localStorage.setItem('text', input.value)
    result.innerHTML = localStorage.getItem('text')
})

const saved = localStorage.getItem("text");
if (saved) result.textContent = "Мурда сакталган: " + saved;

// классная задача 
// промптко жазылган текстти localStorageке сактап, андан кийин аны консолго чыгарыңыз.


// prompt("Сактагыңыз келген текстти жазыңыз: ", "");