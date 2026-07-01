let albumAtual = 0
let musicaAtual = 0

const prox = document.getElementById("proxima")
const antes = document.getElementById("anterior")
const play = document.getElementById("playpause")

const capa = document.getElementById("album")

const nomeAlbum = document.getElementById("nomeAlbum")

const anoAlbum = document.getElementById("anoAlbum")

let tocando = false;

let fundo = document.getElementsByTagName("body")
fundo = fundo[0]

let musica = new Audio()



const albuns = [
    {
        nome: "Preço Curto, Prazo Longo",
        capa: "imgs/precocurto.png",
        ano: 1999,
        musicas :[ 
            "msc/Confisco(MP3_160K).mp3"
        ],
    },

    {
        nome: "Transpiração Contínua Prolongada",
        capa: "imgs/transpiracao.png",
        ano: 1997,
        musicas :[
            "msc/Sheik(MP3_160K).mp3"
        ]
    },

    {
        nome: "Nadando Com os Tubarões",
        capa: "imgs/tubaroes.png",
        ano: 2000,
        musicas :[]
    },

    {
        nome: "100% Charlie Brown Jr - Abalando a Sua Fábrica",
        capa: "imgs/100cbjr.png",
        ano: 2001,
        musicas :[]
    },

    {
        nome: "Ritmo, Ritual E Responsa",
        capa: "imgs/responsa.png",
        ano: 2007,
        musicas :[]
    },

    {
        nome: "Tamo Ai Na Atividade",
        capa: "imgs/tamoai.png",
        ano: 2004, 
        musicas :[]
    },

    {
        nome: "La Família",
        capa: "imgs/lafamilia.png",
        ano: 2013,
        musicas :[]
    },

    {
        nome: "Camisa 10 Joga Bola Até na Chuva",
        capa: "imgs/camisa.png",
        ano: 2009,
        musicas :[]
    },

    {
        nome: "Imunidade Musical",
        capa: "imgs/imunidade.png",
        ano: 2005,
        musicas :[]
    },

    {
        nome: "Bocas Ordinárias",
        capa: "imgs/bocas.png",
        ano: 2002,
        musicas :[]
    }
]
function playpause(){
    if(tocando == false){
        musica.src = albuns[albumAtual].musicas[musicaAtual]
        musica.play ()
        tocando = true
    }
    else{
        musica.pause ()
        tocando = false
    }
}

function atualizarPlayer() {

    capa.src = albuns[albumAtual].capa

    nomeAlbum.textContent = albuns[albumAtual].nome

    anoAlbum.textContent = `CBJR • ${albuns[albumAtual].ano}`

    fundo.style.backgroundImage = `url(${albuns[albumAtual].capa})` 
}

// DAQUI PRA FRENTE, É SO PRA TRAS/////////////////////

function proximoAlbum(){

    albumAtual++

    musicaAtual = 0

    musica.pause()

    tocando = false
   

atualizarPlayer()
}
function Albumanterior(){

    albumAtual--

    musicaAtual = 0

    musica.pause()

    tocando - false
   

atualizarPlayer()
}

atualizarPlayer()

play.onclick = playpause

prox.onclick = proximoAlbum

antes.onclick = Albumanterior
