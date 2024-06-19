let win = window
let dom=document

let body = dom.body

//nuevas formas
let divs = dom.querySelectorAll("div")
let div = dom.querySelector("div")
let form=dom.forms

let porid = dom.getElementById("documento")
let poridnuevo = dom.querySelector("#documento")
let porclase = dom.querySelectorAll(".container")
let clase =dom.getElementsByClassName("input")
// console.log(dom.images)

let litems = dom.querySelectorAll("ul.list> li.item")

let api = dom.getElementById("api")
let apimayuscula=api.textContent.toUpperCase()

api.innerHTML

// console.log(api)

// ejercicio

const padre1 = dom.getElementById("cards");

// console.log(padre1.children)

const nuevo = [...padre1.children]



nuevo.map((a, i) => {
  if (i % 2 != 0) {
    a.classList.toggle("bg-white")
    

  }
})

const formulario = dom.getElementById("search");
 
formulario.setAttribute("autocomplete", "on")

const input1 = dom.querySelector(".input")
// input1.setAttribute("placeholder", "")

input1.removeAttribute("placeholder")
input1.setAttribute("placeholder", "Search")
// input1.setAttribute("search")
// const listaA = [...body.children]

// body.children.map((x) => {
//   console.log(x)
// })

//CUSTOM PROPIERTIES CSS

const html1 = dom.documentElement

console.log(html1)


const MineShaft = getComputedStyle(html1).getPropertyValue("--MineShaft")
const white = getComputedStyle(html1).getPropertyValue("--white")
// console.log(MineShaft)

// html1.style.setProperty("--MineShaft", "#fff")
// html1.style.setProperty("--white", "#000000")

const parrafo = dom.querySelector("#elementos")
// parrafo.textContent = " <b>hola</b> <br> hola</br> holaaaaaaaaaaaaaaaaaaaa";
parrafo.innerHTML = " <b>hola</b> <br> hola</br> holaaaaaaaaaaaaaaaaaaaa";
console.log(parrafo)