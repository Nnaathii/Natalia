const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "com que frequência você tem crise de ansiedade?",
        alternativas: [
            {
                texto: "com frequência diariamente",
                afirmacao: "você é uma pessoa ansiosa"
            },
            {
                texto: "poucas vezes, em uma situação específica",
                afirmacao: "você é uma pessoa estável"
            }
        ]
    },
    {
        enunciado: "você tem algum tipo de crise de ansiedade generalizada?",
        alternativas: [
            {
                texto: "sim, diagnosticada como generalizada",
                afirmacao: "você é uma pessoa com preocupações excessivas relacionadas a vida ou rotina"
            },
            {
                texto: "não, nunca tentei descobrir mais sobre isso",
                afirmacao: "pode ter indícios, mas não se preocupa em saber"
            }
        ]
    },
    {
        enunciado: "você já teve uma crise de síndrome de pânico ou sabe como acontece?",
        alternativas: [
            {
                texto: "sim, sei exatamente o que fazer em uma situação como essa",
                afirmacao: "você é uma pessoa curiosa sobre o assunto, podendo ter indícios de ansiedade"
            },
            {
                texto: "não, nunca ouvi falar ou questionei sobre",
                afirmacao: "você deveria buscar mais e se preocupar, porque pode acontecer com qualquer um"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
