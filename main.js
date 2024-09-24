// Função genérica para converter entre bases
function converterBase(valor, baseInicial, baseFinal) {
    let decimalValor = parseInt(valor, baseInicial); // Converte para decimal a partir da base inicial
    if (isNaN(decimalValor)) {
        alert(`Por favor, insira um valor válido na base ${baseInicial}.`);
        return;
    }
    return decimalValor.toString(baseFinal).toUpperCase(); // Converte de decimal para a base final
}

// Funções específicas para cada conversão
function converterDecimalParaBinario() {
    let valor = document.getElementById("id_decimal_para_binario").value;
    let binario = converterBase(valor, 10, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

function converterDecimalParaOctal() {
    let valor = document.getElementById("id_decimal_para_octal").value;
    let octal = converterBase(valor, 10, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterDecimalParaHexa() {
    let valor = document.getElementById("id_decimal_para_hexa").value;
    let hexa = converterBase(valor, 10, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}

function converterHexParaBinario() {
    let valor = document.getElementById("id_hex_para_binario").value;
    let binario = converterBase(valor, 16, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

function converterHexParaOctal() {
    let valor = document.getElementById("id_hex_para_octal").value;
    let octal = converterBase(valor, 16, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterHexParaDecimal() {
    let valor = document.getElementById("id_hex_para_decimal").value;
    let decimal = converterBase(valor, 16, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

function converterBinarioParaDecimal() {
    let valor = document.getElementById("id_binario_para_decimal").value;
    let decimal = converterBase(valor, 2, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

function converterBinarioParaOctal() {
    let valor = document.getElementById("id_binario_para_octal").value;
    let octal = converterBase(valor, 2, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterBinarioParaHexa() {
    let valor = document.getElementById("id_binario_para_hexa").value;
    let hexa = converterBase(valor, 2, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}
// Converter Octal para Binário
function converterOctalParaBinario() {
    let valor = document.getElementById("id_octal_para_binario").value;
    let binario = converterBase(valor, 8, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

// Converter Octal para Decimal
function converterOctalParaDecimal() {
    let valor = document.getElementById("id_octal_para_decimal").value;
    let decimal = converterBase(valor, 8, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

// Converter Octal para Hexadecimal
function converterOctalParaHexa() {
    let valor = document.getElementById("id_octal_para_hexa").value;
    let hexa = converterBase(valor, 8, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}

// Função para soma de valores em diferentes bases com base no resultado selecionado
function realizarSoma() {
    let valor1 = document.getElementById("valor1_soma").value;
    let valor2 = document.getElementById("valor2_soma").value;
    let base1 = parseInt(document.getElementById("base1_soma").value);
    let base2 = parseInt(document.getElementById("base2_soma").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_soma").value);

    // Converter os valores para decimal
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Realizar a soma em decimal
    let resultadoDecimal = decimal1 + decimal2;

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_soma").style.display = 'block';
    document.getElementById("div_exibir_resultado_soma").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}

// Função para subtração de valores em diferentes bases com base no resultado selecionado
function realizarSubtracao() {
    let valor1 = document.getElementById("valor1_subtracao").value;
    let valor2 = document.getElementById("valor2_subtracao").value;
    let base1 = parseInt(document.getElementById("base1_subtracao").value);
    let base2 = parseInt(document.getElementById("base2_subtracao").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_subtracao").value);

    // Converter os valores para decimal
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Realizar a subtração em decimal
    let resultadoDecimal = decimal1 - decimal2;

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_subtracao").style.display = 'block';
    document.getElementById("div_exibir_resultado_subtracao").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}

// Funções para exibir as divs
function aparecer_bin() {
    document.getElementById("div_exibir_bin").style.display = 'block';
}

function aparecer_octal() {
    document.getElementById("div_exibir_octal").style.display = 'block';
}

function aparecer_hexa() {
    document.getElementById("div_exibir_hexa").style.display = 'block';
}

function aparecer_decimal() {
    document.getElementById("div_exibir_decimal").style.display = 'block';
}
