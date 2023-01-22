let seuVotoPara = document.querySelector(".texto-inicio span");
let cargo = document.querySelector(".texto-cargo span");
let descricao = document.querySelector(".dados-candidato");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".numeros-container");

let etapaAtual = 0;
let numero = "";
let votoBranco = false;
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = "";
  numero ='';
  votoBranco = false;

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

    let fotosHtml = "";
    for (let i in candidato.fotos) {
      if(candidato.fotos[i].small){
        fotosHtml +=
        `<div class="d-1-image small"><img src="./img/${candidato.fotos[i].url}" alt="" /><p>${candidato.fotos[i] .legenda}</p></div>`;
      } else{
        fotosHtml +=
        `<div class="d-1-image"><img src="./img/${candidato.fotos[i].url}" alt="" /><p>${candidato.fotos[i] .legenda}</p></div>`;
      }

    }

    lateral.innerHTML = fotosHtml;
  } else{
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>';

  }
}

function clicou(n) {
  let elNumero = document.querySelector(".numero.pisca");

  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove("pisca");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}
function branco() {
    numero = '';
    votoBranco = true;
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';
}
function corrige() {
  comecarEtapa();
}
function confirma() {
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if (votoBranco === true){
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto:'branco'
    });
    console.log("Confirmando como branco");
  } else if(numero.length === etapa.numeros){
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero ,
    });
  }

  if(votoConfirmado){
    etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
      comecarEtapa();
    } else{
      document.querySelector('.tela').innerHTML = '<div class="aviso-final pisca">FIM!</div>'
      console.log(votos);
    }
  }


}

comecarEtapa();
