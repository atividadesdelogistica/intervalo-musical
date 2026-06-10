import { db } from "./firebase-config.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const SENHA = "intervalo2026";

window.entrar = async function(){

const senha =
document.getElementById("senha").value;

if(senha !== SENHA){

document.getElementById("erroSenha")
.innerHTML = "Senha incorreta";

return;

}

document.getElementById("loginArea")
.style.display = "none";

document.getElementById("painel")
.style.display = "block";

carregarPedidos();

};

async function carregarPedidos(){

const lista =
document.getElementById("listaPedidos");

const rankingDiv =
document.getElementById("ranking");

lista.innerHTML = "";
rankingDiv.innerHTML = "";

const snapshot =
await getDocs(collection(db,"pedidos"));

const ranking = {};

snapshot.forEach(doc=>{

const dados = doc.data();

const card =
document.createElement("div");

card.style.background="#334155";
card.style.padding="15px";
card.style.marginTop="10px";
card.style.borderRadius="10px";
card.style.color="white";

card.innerHTML=`

<strong>${dados.nome}</strong>

<br>

${dados.turma}

<hr>

${dados.musicas.join("<br>")}

`;

lista.appendChild(card);

dados.musicas.forEach(m=>{

ranking[m] =
(ranking[m] || 0) + 1;

});

});

const ordenado =
Object.entries(ranking)
.sort((a,b)=>b[1]-a[1]);

ordenado.forEach(item=>{

const linha =
document.createElement("div");

linha.style.color="white";
linha.style.marginTop="8px";

linha.innerHTML =
`🎵 ${item[0]} (${item[1]} votos)`;

rankingDiv.appendChild(linha);

});

}
