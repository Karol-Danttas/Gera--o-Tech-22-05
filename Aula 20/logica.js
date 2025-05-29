const titulo = document.getElementById("texto");
const botao = document.getElementById("btn");
const bodi = document.getElementById("bodi");
const paragrafo = document.getElementById("resultado")
const lista = document.getElementById("lista")
const entrada = document.getElementById("entrada")

// botao.addEventListener("click", ()=>{
//     titulo.textContent = "novo texto";
//     titulo.style.color = "black";
//     bodi.style.background = "green";
// })

function teste() {
    // titulo.textContent = "novo texto";
    // titulo.style.color = "black";
    // bodi.style.background = "green";
    // paragrafo.remove();
// const novoItem = document.createElement("li");
// novoItem.textContent = "mais um item criado";
// lista.appendChild(novoItem);

const texto = entrada.value;
resultado.textContent = `Você digitou: ${texto}`;
}
botao.addEventListener("click", teste);