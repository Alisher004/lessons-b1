let title = document.querySelector('h1')
// let button = document.querySelector("button")
let btn1 = document.querySelector("#btn1")
let btn2 = document.getElementById("btn2")

btn1.addEventListener('click', () => {
    // alert("кнопка работает")
    title.style.background = "black"
    title.style.color = "red"
    title.style.width = "200px"
    title.style.height = "200px"
})

btn2.addEventListener('click', () => {
    document.body.style.background = 'red'
})

btn3.addEventListener('click', () => {
    document.body.style.background = 'white'
})




let lamp = document.getElementById("img")
let on = document.getElementById("on")
let off = document.getElementById("off")

on.onclick = function(){
    lamp.src = "https://cdn-icons-png.flaticon.com/512/5311/5311894.png"
}
off.onclick = function(){
    lamp.src = 'https://cdn-icons-png.flaticon.com/512/1582/1582286.png'
}