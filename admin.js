import { db } from "./firebase-config.js";

import {
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const SENHA = "intervalo2026";

window.entrar = async function(){

const senha =
document.getElementById("senha").value;

const erro =
document.getElementById("erroSenha");

if(senha !== SENHA){

erro.innerHTML = "❌ Senha incorreta";
erro.style.color = "red";

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

snapshot.forEach((documento)=>{

const dados = documento.data();

const card =
document.createElement("div");

card.style.background = "#334155";
card.style.padding = "15px";
card.style.marginTop = "10px";
card.style.borderRadius = "10px";
card.style.color = "white";

card.innerHTML = `

<strong>${dados.nome}</strong>

<br>

${dados.turma}

<hr>

${dados.musicas.join("<br>")}

`;

lista.appendChild(card);

dados.musicas.forEach((musica)=>{

ranking[musica] =
(ranking[musica] || 0) + 1;

});

});

const rankingOrdenado =
Object.entries(ranking)
.sort((a,b)=>b[1]-a[1]);

rankingOrdenado.forEach((item)=>{

const linha =
document.createElement("div");

linha.style.color = "white";
linha.style.marginTop = "10px";
linha.style.padding = "10px";
linha.style.background = "#334155";
linha.style.borderRadius = "10px";

linha.innerHTML =
`🎵 ${item[0]} — ${item[1]} voto(s)`;

rankingDiv.appendChild(linha);

});

}

window.limparTudo = async function(){

const confirmar = confirm(
"Tem certeza que deseja apagar TODOS os pedidos?"
);

if(!confirmar){
return;
}

const snapshot =
await getDocs(collection(db,"pedidos"));

for(const documento of snapshot.docs){

await deleteDoc(
doc(
db,
"pedidos",
documento.id
)
);

}

document.getElementById("listaPedidos")
.innerHTML = "";

document.getElementById("ranking")
.innerHTML = "";

alert(
"✅ Todos os pedidos foram apagados!"
);

};
