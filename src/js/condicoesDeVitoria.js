function verificarVitoriaHorizontal(linha, coluna, XorO) {
    for (let i = 0; i < coluna; i++) {
        console.log(linha, i)
        if (matriz[linha][i] != XorO) {
            return false
        }
    }
    return true
}

function verificarVitoriaVertical(linha, coluna, XorO) {
    for (let i = 0; i < linha; i++) {
        console.log(i, coluna)
        if (matriz[i][coluna] != XorO) {
            return false
        }
    }
    return true
}

function verificarVitoriaDiagonalPrincipal(linha, XorO) {
    let j = 0
    for (let i = 0; i < linha; i++) {

        if (matriz[i][j] != XorO) {
            return false
        }
        j++
    }
    return true;
}

function verificarVitoriaDiagonalSecundária(coluna, XorO) {
    let j = coluna - 1
    for (let i = 0; i < coluna; i++) {
        if (matriz[i][j] != XorO) {
            return false
        }
        j--
    }
    return true;
}