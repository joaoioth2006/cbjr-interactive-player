console.log("funcionou")
let albumAtual = 0
let capa = document.getElementById("album")

let albuns = [
  {
    nome: "Preço Curto, Prazo Longo",
    capa: "imgs/precocurto.png",
    ano: 1999,
  },

  {
    nome: "Transpiração Contínua Prolongada",
    capa: "imgs/transpiracao.png",
    ano: 1997,
  },

  {
    nome: "Nadando Com os Tubarões",
    capa: "imgs/tubaroes.png",
    ano: 2000,
  },

  {
    nome: "100% Charlie Brown Jr - Abalando a Sua Fábrica",
    capa: "imgs/100cbjr.png",
    ano: 2001,
  },

  {
    nome: "Ritmo, Ritual E Responsa",
    capa: "imgs/responsa.png",
    ano: 2007,
  },

  {
    nome: "Tamo Ai Na Atividade",
    capa: "imgs/tamoai.png",
    ano: 2004,
  },

  {
    nome: "La Família",
    capa: "imgs/lafamilia.png",
    ano: 2013,
  },

  {
    nome: "Camisa 10 Joga Bola Até na Chuva",
    capa: "imgs/camisa.png",
    ano: 2009,
  },

  {
    nome: "Imunidade Musical",
    capa: "imgs/imunidade.png",
    ano: 2005,
  },

  {
    nome: "Bocas Ordinárias",
    capa: "imgs/bocas.png",
    ano: 2002,
  },
];

capa.src = albuns[albumAtual].capa
