import {datos} from "./datos.js"


//identificamos el elemento por la clase

const padre = document.querySelector("container");
console.log(padre)
//creamos un nodo

const nodo=document.createElement("p")


const texto = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptas saepe sunt? Delectus quia aut a nobis, repudiandae nesciunt sunt!"

nodo.innerText = texto;

padre.appendChild(nodo)

const lista = document.querySelector("div.container >div.card")
console.log(lista)



datos.map(a => {
  const item = document.createElement("li")
  item.innerText = a.name;
  lista.appendChild(item)
  item.classList.add("item")
  console.log(a.name)
  
})



