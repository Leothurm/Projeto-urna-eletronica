let seuVotoPara = document.querySelector(".texto-inicio span");
let cargo = document.querySelector(".texto-cargo span");
let descricao = document.querySelector(".dados-candidato");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".numeros-container");



let etapaAtual = 0;



function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++){
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

    
}












function clicou(n) {
  alert("Clicou em " + n);
}
function branco() {
  alert("Clicou em BRANCO!");
}
function corrige() {
  alert("Clicou em CORRIGE!");
}
function confirma() {
  alert("Clicou em CONFIRMA!");
}



comecarEtapa();