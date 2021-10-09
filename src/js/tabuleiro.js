const tabuleiro = document.querySelector(".tabuleiro")
const matriz = [];
let jogadorDaVez = true;

function criarTabuleiro(linha, coluna) {
    for (let i = 0; i < coluna; i++) {
        const divColuna = document.createElement("div")
        divColuna.id = "coluna-" + i
        divColuna.classList.add("coluna")
        for (let j = 0; j < linha; j++) {
            const divLinha = document.createElement("div")
            divLinha.id = "linha-" + i + j
            divLinha.classList.add("linha")
            if (i == coluna - 1) {
                divLinha.classList.add("tirarBordaRight")
            }
            if (j == linha - 1) {
                divLinha.classList.add("tirarBordaBottom")
            }
            divLinha.addEventListener("click", jogar)
            divColuna.appendChild(divLinha)
        }
        tabuleiro.appendChild(divColuna)
    }
}

function inicializarMatriz(linha, coluna) {
    for (let i = 0; i < linha; i++) {
        matriz[i] = [];
        for (let j = 0; j < coluna; j++) {
            matriz[i][j] = ""
        }
    }
}

function jogar(evt) {
    const div = document.createElement("div")
    div.classList.add("adicionarImg")
    let array = evt.currentTarget.id.split("-")
    let coluna = Number(array[1][0])
    let linha = Number(array[1][1])
    if (matriz[linha][coluna] == "") {
        if (jogadorDaVez) {
            matriz[linha][coluna] = "x"
            let jogador = "toad"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador + ".png)"
            jogadorDaVez = false
        } else {
            matriz[linha][coluna] = "o"
            let jogador = "mario"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador + ".png)"
            jogadorDaVez = true
        }
        this.style.backgroundImage = "url(./src/assets/img/caixinhasurpresaapagada.jpg)"
        evt.currentTarget.appendChild(div)
    }

}