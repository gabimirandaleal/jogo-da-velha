function colorirFonte(str) {
    let array = ["colorirVermelho", "colorirVerde", "colorirAmarelo", "colorirAzul"]
    let cont = 0;
    let constante = document.createElement("div");
    constante.classList.add("palavra")
    const divTitulo = document.querySelector(".titulo")
    for (let i = 0; i < str.length; i++) {
        const p = document.createElement("p");
        if (str[i] == " ") {
            divTitulo.appendChild(constante)
            constante = document.createElement("div")
            constante.classList.add("palavra")
            continue;
        }
        if (str[i] != " ") {
            p.classList.add(array[cont++])
            p.innerText = str[i]
            constante.appendChild(p)
        }
        if (cont > 3) {
            cont = 0;
        }
    }
    divTitulo.appendChild(constante)
}

colorirFonte("Jogo Da Velha")