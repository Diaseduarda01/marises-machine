function converterParaBinario() {
    // Obtendo o valor do input de decimal
    var decimalPBinario = Number(document.getElementById("id_decimal_para_binario").value);

    // Verificando se o valor inserido é um número válido
    if (isNaN(decimalPBinario)) {
        alert("Por favor, insira um valor decimal válido.");
        return;
    }

    // Convertendo o valor decimal para binário
    let binaria = decimalPBinario.toString(2);

    // Exibindo o valor convertido no console
    console.log(`Binário: ${binaria}`);

    // Exibindo o resultado no HTML e mostrando a div
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binaria}`;
    aparecer_bin(); // Tornando o resultado visível
}

function converterParaOctal() {
    var decimalPOctal = Number(document.getElementById("id_decimal_para_octal").value);

    if (isNaN(decimalPOctal)) {
        alert("Por favor, insira um valor decimal válido.");
        return;
    }

    let octal = decimalPOctal.toString(8);
    console.log(`Octal: ${octal}`);

    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal(); // Tornando o resultado visível
}

function converterParaHexa() {
    var decimalPHexa = Number(document.getElementById("id_decimal_para_hexa").value);

    if (isNaN(decimalPHexa)) {
        alert("Por favor, insira um valor decimal válido.");
        return;
    }

    let hexadecimal = decimalPHexa.toString(16);
    console.log(`Hexadecimal: ${hexadecimal}`);

    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexadecimal}`;
    aparecer_hexa(); // Tornando o resultado visível
}

// Funções para exibir os resultados
function aparecer_bin() {
    document.getElementById("div_exibir_bin").style.display = 'block';
}

function aparecer_octal() {
    document.getElementById("div_exibir_octal").style.display = 'block';
}

function aparecer_hexa() {
    document.getElementById("div_exibir_hexa").style.display = 'block';
}
function navigatePage() {
    const selectedOption = document.getElementById("conversionSelect").value;
    if (selectedOption) {
        window.location.href = selectedOption; // Redireciona para a página selecionada
    }
}