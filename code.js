//Declarando variáveis de cálculos:
let arrayCalc = [];
let operador = "",
expressao = "";
let resultado;

//Declarando o visor de tela de números:

let cbx_visor = document.getElementById("visor");

//Declarando o histórico de cálculos:

let tb_historico = document.getElementById("historico");
let btn_limparHistorico = document.getElementById("limparHistorico");

//Declarando botões de números:

let btn_zero = document.getElementById("zero");
let btn_um = document.getElementById("um");
let btn_dois = document.getElementById("dois");
let btn_tres = document.getElementById("tres");
let btn_quatro = document.getElementById("quatro");
let btn_cinco = document.getElementById("cinco");
let btn_seis = document.getElementById("seis");
let btn_sete = document.getElementById("sete");
let btn_oito = document.getElementById("oito");
let btn_nove = document.getElementById("nove");
let btn_ponto = document.getElementById("ponto");
let btn_delete = document.getElementById("delete");
let btn_undo = document.getElementById("undo");

//Declarando botões de operadores:

let btn_somar = document.getElementById("somar");
let btn_subtrair = document.getElementById("subtrair");
let btn_multiplicar = document.getElementById("multiplicar");
let btn_dividir = document.getElementById("dividir");
let btn_resultado = document.getElementById("btnResultado");

//Ativando as funções nas teclas correspondentes do teclado:

document.onkeyup = function(e) {
    if (e.which == 13) {
        calcular();
    }

    if (e.which == 46) {
        limpar();
    }

    if (e.which == 8) {
        undo();
    }

    if (e.ctrlKey && e.which == 46){
	limparHistorico();
    }

    if (e.which == 107) {
        somar();
    }

    if (e.which == 109) {
        subtrair();
    }

    if (e.which == 106) {
        multiplicar();
    }

    if (e.which == 111) {
        dividir();
    }

    if (e.which == 190 || e.which == 194 || e.which == 188 || e.which == 110) {
        ponto();
    }

    if (e.which == 48 || e.which == 96) {
        zero();
    }

    if (e.which == 49 || e.which == 97) {
        um();
    }

    if (e.which == 50 || e.which == 98) {
        dois();
    }

    if (e.which == 51 || e.which == 99) {
        tres();
    }

    if (e.which == 52 || e.which == 100) {
        quatro();
    }

    if (e.which == 53 || e.which == 101) {
        cinco();
    }

    if (e.which == 54 || e.which == 102) {
        seis();
    }

    if (e.which == 55 || e.which == 103) {
        sete();
    }

    if (e.which == 56 || e.which == 104) {
        oito();
    }

    if (e.which == 57 || e.which == 105) {
        nove();
    }
}

//Funções dos botões:

function zero() {
    if (cbx_visor.value == "") {
        cbx_visor.value = "";
    } else {
        if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
            cbx_visor.value = '0';
        } else {
            cbx_visor.value += '0';
        }
    }
}

function um() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '1';
    } else {
        cbx_visor.value += '1';
    }
}

function dois() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '2';
    } else {
        cbx_visor.value += '2';
    }
}

function tres() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '3';
    } else {
        cbx_visor.value += '3';
    }
}

function quatro() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '4';
    } else {
        cbx_visor.value += '4';
    }
}

function cinco() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '5';
    } else {
        cbx_visor.value += '5';
    }
}

function seis() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '6';
    } else {
        cbx_visor.value += '6';
    }
}

function sete() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '7';
    } else {
        cbx_visor.value += '7';
    }
}

function oito() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '8';
    } else {
        cbx_visor.value += '8';
    }
}

function nove() {
    if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '9';
    } else {
        cbx_visor.value += '9';
    }
}

function ponto() {
    if (cbx_visor.value == "" || cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
        cbx_visor.value = '0.';
    } else {
        if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
            cbx_visor.value = ".";
        } else {
            cbx_visor.value += ".";
        }
    }
}

function somar() {
    arrayCalc.push(parseFloat(cbx_visor.value));
    operador = "+";
    expressao = expressao + cbx_visor.value;
    cbx_visor.value = "+";
}

function subtrair() {
    if (cbx_visor.value == "") {
        cbx_visor.value = "-";
    } else {
        arrayCalc.push(parseFloat(cbx_visor.value));
        operador = "-";
        expressao = expressao + cbx_visor.value;
        cbx_visor.value = "-";
    }
}

function multiplicar() {
    arrayCalc.push(parseFloat(cbx_visor.value));
    operador = "*";
    expressao = expressao + cbx_visor.value;
    cbx_visor.value = "*";
}

function dividir() {
    arrayCalc.push(parseFloat(cbx_visor.value));
    operador = "/";
    expressao = expressao + cbx_visor.value;
    cbx_visor.value = "/";
}

function limpar() {
    cbx_visor.value = "";
    valor1 = 0, valor2 = 0;
    arrayCalc = [];
}

function undo() {
    cbx_visor.value = cbx_visor.value.substring(0, cbx_visor.value.length - 1);
}

function limparHistorico(){
    tb_historico.innerHTML = "";
}

//Ativar evento ao clicar:

btn_delete.addEventListener("click", limpar);

btn_undo.addEventListener("click", undo);

btn_limparHistorico.addEventListener("click", limparHistorico);

btn_zero.addEventListener("click", zero);
btn_um.addEventListener("click", um);
btn_dois.addEventListener("click", dois);
btn_tres.addEventListener("click", tres);
btn_quatro.addEventListener("click", quatro);
btn_cinco.addEventListener("click", cinco);
btn_seis.addEventListener("click", seis);
btn_sete.addEventListener("click", sete);
btn_oito.addEventListener("click", oito);
btn_nove.addEventListener("click", nove);

btn_ponto.addEventListener("click", ponto);

btn_somar.addEventListener("click", somar);
btn_subtrair.addEventListener("click", subtrair);
btn_multiplicar.addEventListener("click", multiplicar);
btn_dividir.addEventListener("click", dividir);

btn_resultado.addEventListener("click", calcular);

function historico() {
    expressao += operador + cbx_visor.value;

    if (expressao == "" && operador == ""){
	expressao = "Não há expressão"
    }

    tb_historico.innerHTML += '<tr><td>' + expressao + '</td><th scope="row">' + resultado + '</th></tr>';
}

function calcular() {

    if (cbx_visor == "") {
        cbx_visor = "";
    } else if (cbx_visor.value !== "" && operador == ""){
	resultado = parseFloat(cbx_visor.value);
	

	arrayCalc = [];
        historico();

        expressao = "";
        operador = "";

        return cbx_visor.value = resultado;
    } else {
        resultado = 0;

        if (cbx_visor.value == "+" || cbx_visor.value == "-" || cbx_visor.value == "*" || cbx_visor.value == "/") {
            arrayCalc.push(0);
        } else {
            arrayCalc.push(parseFloat(cbx_visor.value));
        }

        if (operador == "*" || operador == "/") {
            resultado = arrayCalc[0];
        }

        for (let i = 1; i < arrayCalc.length; i++) {
            if (operador == "*") {
                resultado *= arrayCalc[i];
            } else if (operador == "/") {
                resultado /= arrayCalc[i];
            }
        }

        for (let i = 0; i < arrayCalc.length; i++) {
            if (operador == "+") {
                resultado += arrayCalc[i];
            } else if (operador == "-") {
                resultado = arrayCalc[i] - resultado;
            }
        }

        if (operador == "-") {
            resultado = -resultado;
        }

        resultado = "" + resultado + "";
        if (resultado == "NaN") {
            resultado = "Expressão Incorreta"
        }

        arrayCalc = [];
        historico();

	console.log(expressao);

        expressao = "";
        operador = "";

        return cbx_visor.value = resultado;
    }
}