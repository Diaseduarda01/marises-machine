function converter() {
    // Obtendo valores dos inputs corretamente
    var decimalPBinario = Number(document.getElementById("id_decimal_para_binario").value);
    var decimalPOctal = Number(document.getElementById("id_decimal_para_octal").value);
    var decimalPHexa = Number(document.getElementById("id_decimal_para_hexa").value);

    // Convertendo para outras bases
    let octal = decimalPOctal.toString(8);
    let hexadecimal = decimalPHexa.toString(16);
    let binaria = decimalPBinario.toString(2);

    // Exibindo no console
    console.log(binaria);
    console.log(octal);
    console.log(hexadecimal);

    // Atualizando o HTML com os valores convertidos
    document.getElementById("demo4").innerHTML = `Binário: ${binaria}`;
    document.getElementById("demo2").innerHTML = `Octal: ${octal}`;
    document.getElementById("demo3").innerHTML = `Hexadecimal: ${hexadecimal}`;
}

function aparecer_bin() {
    document.getElementById("demo4").style.display = 'block';
}

function aparecer_hexa() {
    document.getElementById("demo3").style.display = 'block';
}

function aparecer_octal() {
    document.getElementById("demo2").style.display = 'block';
}
