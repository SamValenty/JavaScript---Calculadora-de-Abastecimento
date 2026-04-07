// preço do combustível
const precoGasolina = 6.69;
const precoEtanol = 5.85;
const precoDiesel = 6.10;

// definição da função de cálculo 
const calcularAbastecimento = (precoCombustivel, litros) => {
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
};

// função
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;
    const litros = parseFloat(litrosInput);

    // alerta sobre as validações 
    if (!tipo) {
        alert("Escolha um tipo de combustível.");
        return;
    }

    if (!litrosInput) {
        alert("Informe a quantidade de litros.");
        return;
    }

    if (isNaN(litros) || litros <= 0) {
        alert("Determine o valor do combustível, sendo um número positivo.");
        return;
    }

    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            alert("Escolha uma opção válida.");
            return;
    }

    //chamada da função 
    calcularAbastecimento(precoPorLitro, litros);
};

// função para formatar moeda
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

// eventos
const tipo = document.getElementById("combustivel");
const litros = document.getElementById("litros");
const form = document.getElementById("formCombustivel");

tipo.addEventListener("change", atualizarValor);
litros.addEventListener("input", atualizarValor);

// impedir reload ao pressionar Enter
form.addEventListener("submit", (e) => {
    e.preventDefault();
});