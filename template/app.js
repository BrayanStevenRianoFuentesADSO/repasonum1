import { comentarios } from "./modulo.js";

const root = document.querySelector("#root")
const plantilla = document.querySelector("#plantilla").content;
const fragmento=document.createDocumentFragment()



const section = document.createElement("section")
section.classList.add("cards")

console.log(plantilla)

comentarios().then((lista) => {
  
  lista.forEach(comentario => {

    plantilla.querySelector("div > h2").textContent = `${comentario.id} - ${comentario.name}`
    plantilla.querySelector("div > div > p").textContent = comentario.email;
    plantilla.querySelector("div > div > p ~ p").textContent = comentario.body;

    plantilla.querySelector("div").classList.add("card")

    const clon = document.importNode(plantilla, true)
    fragmento.appendChild(clon)


  });
  section.appendChild(fragmento)
  root.appendChild(section)
})

