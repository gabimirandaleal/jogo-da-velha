function verificarVitoriaHorizontal(linha, coluna, XorO) {
    for (let i = 0; i < coluna; i++) {
        if (matriz[linha][i] != XorO) {
            return false
        }
    }
    for (let i = 0; i < coluna; i++) {
        document.querySelector("#linha-" + i + linha).classList.add("ganhou")
    }
    return true
}

function verificarVitoriaVertical(linha, coluna, XorO) {
    for (let i = 0; i < linha; i++) {
        if (matriz[i][coluna] != XorO) {
            return false
        }
    }
    for (let i = 0; i < linha; i++) {
        document.querySelector("#linha-" + coluna + i).classList.add("ganhou")
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
    j = 0
    for (let i = 0; i < linha; i++) {
        document.querySelector("#linha-" + j + i).classList.add("ganhou")
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
    j = coluna - 1
    for (let i = 0; i < coluna; i++) {
        document.querySelector("#linha-" + j + i).classList.add("ganhou")
        j--
    }
    return true;
}

function verificarEmpate(linha, coluna) {
    for (let i = 0; i < linha; i++) {
        for (let j = 0; j < coluna; j++) {
            if (matriz[i][j] == "") {
                return false
            }
        }
    }
    for (let i = 0; i < linha; i++) {
        for (let j = 0; j < coluna; j++) {
            document.querySelector("#linha-" + j + i).classList.add("ganhou")
        }
    }
    return true
}