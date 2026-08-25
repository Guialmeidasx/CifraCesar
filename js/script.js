// Cifra de César
function caesarCipher(texto, deslocamento) {

    let textoCifrado = "";

    // Garante que o deslocamento fique entre 0 e 25
    deslocamento = deslocamento % 26;

    for (let i = 0; i < texto.length; i++) {

        let char = texto.charAt(i);
        let codigo = texto.charCodeAt(i);

        // Letras maiúsculas
        if (codigo >= 65 && codigo <= 90) {

            codigo =
                ((codigo - 65 + deslocamento) % 26) + 65;

        }

        // Letras minúsculas
        else if (codigo >= 97 && codigo <= 122) {

            codigo =
                ((codigo - 97 + deslocamento) % 26) + 97;
        }

        textoCifrado += String.fromCharCode(codigo);
    }

    return textoCifrado;
}


// Cifrar
function executarCifra() {

    const texto =
        document.getElementById("texto").value;

    const deslocamento =
        parseInt(
            document.getElementById("deslocamento").value
        );

    if (texto.trim() === "") {

        mostrarResultado(
            "Digite um texto para cifrar."
        );

        return;
    }

    const resultado =
        caesarCipher(texto, deslocamento);

    mostrarResultado(
        "Texto cifrado: " + resultado
    );
}


// Decifrar
function executarDecifra() {

    const texto =
        document.getElementById("texto").value;

    const deslocamento =
        parseInt(
            document.getElementById("deslocamento").value
        );

    if (texto.trim() === "") {

        mostrarResultado(
            "Digite um texto para decifrar."
        );

        return;
    }

    const resultado =
        caesarCipher(
            texto,
            -deslocamento
        );

    mostrarResultado(
        "Texto decifrado: " + resultado
    );
}


// Mostrar resultado
function mostrarResultado(texto) {

    document.getElementById("resultado").innerText =
        texto;
}


// Limpar campos
function limparCampos() {

    document.getElementById("texto").value = "";

    document.getElementById("deslocamento").value = 3;

    document.getElementById("resultado").innerText =
        "O resultado aparecerá aqui.";
}
