criarTabuleiro(3, 3)
inicializarMatriz(3, 3)
let vez = true
let evt1;
let evt2;

const listaPersonagens = document.querySelectorAll(".img-personagem")

listaPersonagens.forEach(disco => {
    disco.addEventListener("click", escolherPersonagem)
})

function escolherPersonagem(evt) {
    console.log(evt)
    if (vez) {
        jogador1 = evt.target.id
        vez = false
        evt.target.style.border = "5px solid white"
        evt1 = evt.target
    } else if (jogador1 != evt.target.id) {
        evt.target.style.border = "5px solid white"
        evt2 = evt.target
        setTimeout(function() {
            jogador2 = evt.target.id
            document.querySelector(".pop-up").style.display = "none";
            vez = true
            evt1.style.border = "5px solid black"
            evt2.style.border = "5px solid black"
        }, 500)

    } else {
        vez = true
        evt.target.style.border = "5px solid black"
    }
}