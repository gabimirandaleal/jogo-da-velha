const tabuleiro = document.querySelector(".tabuleiro")
let matriz = [];
let jogadorDaVez = true;
let ganhou = false;
let jogador1
let jogador2

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
    matriz = []
    for (let i = 0; i < linha; i++) {
        matriz[i] = [];
        for (let j = 0; j < coluna; j++) {
            matriz[i][j] = ""
        }
    }
}

function jogar(evt) {
    console.log(jogador1, jogador2)
    const div = document.createElement("div")
    div.classList.add("adicionarImg")
    let array = evt.currentTarget.id.split("-")
    let coluna = Number(array[1][0])
    let linha = Number(array[1][1])
    if (matriz[linha][coluna] == "" && !ganhou) {
        if (jogadorDaVez) {
            matriz[linha][coluna] = "x"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador1 + ".png)"
            jogadorDaVez = false
            if (verificarVitorias(linha, coluna, "x")) {
                setTimeout(function() {
                    reset();
                }, 2000)
            }
        } else {
            matriz[linha][coluna] = "o"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador2 + ".png)"
            jogadorDaVez = true
            if (verificarVitorias(linha, coluna, "o")) {
                setTimeout(function() {
                    reset();
                }, 2000)
            }
        }

        this.classList.add("caixinhaapagada")
        evt.currentTarget.appendChild(div)
    }

}

function verificarVitorias(i, j, XorO) {
    if (verificarVitoriaHorizontal(i, matriz.length, XorO)) {
        ganhou = true;
        return true;
    }
    if (verificarVitoriaVertical(matriz.length, j, XorO)) {
        ganhou = true;
        return true;
    }
    if (verificarVitoriaDiagonalSecundária(matriz.length, XorO)) {
        ganhou = true;
        return true;
    }
    if (i == j) {
        if (verificarVitoriaDiagonalPrincipal(matriz.length, XorO)) {
            ganhou = true;
            return true;
        }
    }
    if (verificarEmpate(matriz.length, matriz.length)) {
        ganhou = true;
        return true;
    }
    return false
}

function reset() {
    let list = document.querySelectorAll(".adicionarImg");
    let listCaixinha = document.querySelectorAll(".caixinhaapagada");
    let ganhouList = document.querySelectorAll(".ganhou");

    for (let i = 0; i < listCaixinha.length; i++) {
        listCaixinha[i].classList.remove("caixinhaapagada")
    }
    for (let i = 0; i < list.length; i++) {
        list[i].parentNode.removeChild(list[i])
    }
    for (let i = 0; i < ganhouList.length; i++) {
        ganhouList[i].classList.remove("ganhou")
    }
    ganhou = false
    jogadorDaVez = true
    inicializarMatriz(matriz.length, matriz.length);
    document.querySelector(".pop-up").style.display = "flex";
}