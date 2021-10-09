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
            document.querySelector("#adicionar").currentTime = 0;
            document.querySelector("#adicionar").play();
            jogadorDaVez = false
            matriz[linha][coluna] = "x"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador1 + ".png)"


            if (verificarVitorias(linha, coluna, "x")) {
                audioIntro.currentTime = 0;
                audioIntro.pause();
                document.querySelector("#vitoria").play();
                ganhou = true
                setTimeout(function() {
                    reset();
                }, 6000)
            }
            if (verificarEmpate(matriz.length, matriz.length)) {
                audioIntro.currentTime = 0;
                audioIntro.pause();
                document.querySelector("#empate").play();
                ganhou = true
                setTimeout(function() {


                    reset();
                }, 4000)
            }


        } else {
            jogadorDaVez = true
            document.querySelector("#adicionar").currentTime = 0;
            document.querySelector("#adicionar").play();
            matriz[linha][coluna] = "o"
            div.style.backgroundImage = "url(./src/assets/img/" + jogador2 + ".png)"
            if (verificarVitorias(linha, coluna, "o")) {
                audioIntro.currentTime = 0;
                audioIntro.pause();
                document.querySelector("#vitoria").play();
                ganhou = true
                setTimeout(function() {
                    reset();
                }, 6000)
            }
            if (verificarEmpate(matriz.length, matriz.length)) {
                audioIntro.currentTime = 0;
                audioIntro.pause();
                document.querySelector("#empate").play();
                ganhou = true
                setTimeout(function() {


                    reset();
                }, 4000)
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
    return false
}

function reset() {
    audioIntro.currentTime = 0;
    audioIntro.play();
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
    for (let i = 0; i < matriz.length; i++) {
        const colunas1 = document.querySelector("#coluna-" + i)
        colunas1.parentNode.removeChild(colunas1)
    }
}