import { db } from "./firebase-config.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("musicForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const nome =
document.getElementById("nome").value;

const turma =
document.getElementById("turma").value;

const musica1 =
document.getElementById("musica1").value;

const musica2 =
document.getElementById("musica2").value;

const musica3 =
document.getElementById("musica3").value;

try {

await addDoc(
collection(db,"pedidos"),
{
nome,
turma,

musicas:[
musica1,
musica2,
musica3
].filter(m=>m.trim() !== ""),

data:new Date()
}
);

mensagem.innerHTML =
"✅ Pedido enviado com sucesso!";

form.reset();

}
catch(error){

console.log(error);

mensagem.innerHTML =
"❌ Erro ao enviar pedido.";

}

});
