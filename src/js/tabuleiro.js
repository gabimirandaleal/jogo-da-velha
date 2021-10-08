const tabuleiro = document.querySelector(".tabuleiro")

function criarTabuleiro(linha, coluna) {
    for (let i = 0; i < coluna; i++) {
        const divColuna = document.createElement("div")
        divColuna.id = "coluna-" + i
        divColuna.classList.add("coluna")
        for (let j = 0; j < linha; j++) {
            const divLinha = document.createElement("div")
            divLinha.id = "linha-" + i + j
            divLinha.classList.add("linha")
            divColuna.appendChild(divLinha)
        }
        tabuleiro.appendChild(divColuna)
    }
}