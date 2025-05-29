// setTimeout(() => {
//     console.log("Depois de 5 segundos isso irá aparecer");
// }, 2000);

// console.log("Acontece agora");


// setInterval(() => {
//     console.log("Depois de 2 segundos isso irá aparecer");
// }, 2000);

// document.body.className = localStorage.getItem("tema") || "claro";

// function alterarTema(){
//     const temaAtual = document.body.className;
//     const novoTema = temaAtual === "claro" ? "escuro" : "claro";
//     document.body.className = novoTema;
//     localStorage.setItem("tema", novoTema);
// }

let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.getElementById("contador").textContent = visitas + "visita(s)";

